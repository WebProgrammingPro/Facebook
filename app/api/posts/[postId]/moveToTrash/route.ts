import { db } from "@/lib/db";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { postId } = context.params;

    if (!postId)
      return Response.json({ message: "Not Post ID" }, { status: 500 });

    const moveToTrash = await db.post.update({
      where: { id: postId },
      data: {
        deletedAt: new Date(),
        isTrashed: true,
      },
    });

    return Response.json(
      { message: "Move To Trash Post Successfully", post: moveToTrash },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Could Not Fetch Posts" }, { status: 500 });
  }
}
