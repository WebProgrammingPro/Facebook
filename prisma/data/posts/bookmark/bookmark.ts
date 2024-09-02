"use server";

import { currentUser } from "@/lib/auth";

import { db } from "@/lib/db";

export const getBookmarkByPostId = async (postId: string) => {
  const user = await currentUser();

  try {
    const bookmarks = await db.bookmark.findFirst({
      where: { userId: user?.id, postId },
    });

    return bookmarks;
  } catch (error) {
    return null;
  }
};
