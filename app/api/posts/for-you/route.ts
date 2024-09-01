import { getPostDataInclude } from "@/lib/types";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const isTrashed = url.searchParams.get("isTrashed") === "true";

    const userCurrent = await currentUser();

    const posts = await db.post.findMany({
      where: { isTrashed },
      include: getPostDataInclude(userCurrent?.id),
      orderBy: {
        createdAt: "desc",
      },
    });

    const postsWithLikeStatus = posts.map((post) => ({
      ...post,
      isLikedByCurrentUser: post.likes.some(
        (like) => like.userId === userCurrent?.id
      ),
    }));

    return Response.json(postsWithLikeStatus, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed To Fetch Posts" }, { status: 500 });
  }
}
