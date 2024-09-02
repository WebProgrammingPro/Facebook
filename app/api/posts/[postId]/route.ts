import { FormInputPostSchema } from "@/schemas";

import { db } from "@/lib/db";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { postId } = context.params;
    const body = await req.json();

    if (!postId)
      return Response.json({ message: "Not Post ID" }, { status: 500 });

    const validatedFields = FormInputPostSchema.safeParse(body);
    if (!validatedFields.success)
      return Response.json({ message: "Invalid Fields" }, { status: 500 });

    const { audience, content } = validatedFields.data;

    const updatedPost = await db.post.update({
      where: { id: postId },
      data: {
        audience,
        content,
        updatedAt: new Date(),
      },
    });

    return Response.json(
      { message: "Updated Post Successfully", post: updatedPost },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Could Not Update Post ID" },
      { status: 500 }
    );
  }
}
