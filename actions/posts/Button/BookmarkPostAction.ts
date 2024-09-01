"use server";

import { PostData } from "@/lib/types";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

import { getBookmarkByPostId } from "@/prisma/data/bookmark";

export const BookmarkPostAction = async (values: PostData) => {
  const userCurrent = await currentUser();
  const existingBookmark = await getBookmarkByPostId(values.id);

  if (!existingBookmark) {
    await db.bookmark.create({
      data: {
        post: { connect: { id: values.id } },
        user: { connect: { id: userCurrent?.id } },
      },
    });

    return { success: "Saved to For Later" };
  } else {
    await db.bookmark.delete({ where: { id: existingBookmark.id } });

    return { success: "Unsaved" };
  }
};
