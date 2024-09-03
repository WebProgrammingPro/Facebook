import { FormInputCommentSchema } from "@/schemas";

import { currentUser } from "@/lib/auth";

import { db } from "@/lib/db";
import { getUserDataSelect } from "@/lib/types/types";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function GET(req: Request, context: contextProps) {
  try {
    const { postId } = context.params;
    const userCurrent = await currentUser();

    const comments = await db.comment.findMany({
      where: {
        userId: userCurrent?.id,
        postId: postId,
      },
      include: {
        user: {
          select: getUserDataSelect(),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(comments, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed To Fetch Posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userCurrent = await currentUser();

    const validatedFields = FormInputCommentSchema.safeParse(body);
    if (!validatedFields.success)
      return Response.json({ error: "Invalid Fields" }, { status: 500 });

    const { content, postId } = validatedFields.data;

    const newComment = await db.comment.create({
      data: {
        content,
        user: { connect: { id: userCurrent?.id } },
        post: { connect: { id: postId } },
      },
    });

    return Response.json(
      { success: "Created Comment Successfully", comment: newComment },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Could Not Create Post" }, { status: 500 });
  }
}
