import { currentUser } from "@/lib/auth";

import { CheckLike } from "@/prisma/data/like";
import { db } from "@/lib/db";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function POST(req: Request, context: contextProps) {
  try {
    const userCurrent = await currentUser();
    const { postId } = context.params;
    const existingLike = await CheckLike(postId);

    if (!postId)
      return Response.json({ message: "Not Post ID" }, { status: 500 });

    if (!existingLike) {
      const post = await db.like.create({
        data: {
          user: { connect: { id: userCurrent?.id } },
          post: { connect: { id: postId } },
        },
      });

      return Response.json(
        { success: "Liked Post Successfully", post },
        { status: 200 }
      );
    } else {
      const post = await db.like.delete({
        where: {
          id: existingLike.id,
        },
      });

      return Response.json(
        { success: "Unliked Post Successfully", post },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json({ error: "Could Not Create Post" }, { status: 500 });
  }
}
