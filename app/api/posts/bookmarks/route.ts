import { currentUser } from "@/lib/auth";

import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const userCurrent = await currentUser();

    if (!userCurrent?.id) {
      return Response.json(
        { message: "User Not Authenticated" },
        { status: 500 }
      );
    }

    const bookmarks = await db.bookmark.findMany({
      where: { userId: userCurrent.id },
      include: {
        user: true,
        post: true,
      },
    });

    return Response.json(bookmarks, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed To Fetch Bookmarks" },
      { status: 500 }
    );
  }
}
