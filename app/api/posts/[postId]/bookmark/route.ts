import { currentUser } from "@/lib/auth";

import { db } from "@/lib/db";
import { getBookmarkByPostId } from "@/prisma/data/posts/bookmark/bookmark";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { postId } = context.params;
    const userCurrent = await currentUser();

    if (!postId)
      return Response.json({ message: "Not Post ID" }, { status: 500 });

    if (!userCurrent?.id) {
      return Response.json(
        { message: "User Not Authenticated" },
        { status: 500 }
      );
    }

    const existingBookmark = await getBookmarkByPostId(postId);
    if (!existingBookmark) {
      await db.bookmark.create({
        data: {
          post: { connect: { id: postId } },
          user: { connect: { id: userCurrent?.id } },
        },
      });

      return Response.json({ message: "Saved to For Later" }, { status: 200 });
    } else {
      await db.bookmark.delete({ where: { id: existingBookmark.id } });

      return Response.json({ message: "Unsaved" }, { status: 200 });
    }
  } catch (error) {
    return Response.json({ message: "Could Not Fetch Posts" }, { status: 500 });
  }
}
