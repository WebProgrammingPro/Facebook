import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const CheckLike = async (postId: string) => {
  const userCurrent = await currentUser();

  try {
    const existingLike = await db.like.findUnique({
      where: {
        userId_postId: {
          userId: userCurrent?.id || "",
          postId: postId,
        },
      },
    });

    return existingLike;
  } catch (error) {
    return null;
  }
};
