"use server";

import { PostData } from "@/lib/types";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

import { CheckLike } from "@/prisma/data/like";

export const LikePostAction = async (post: PostData) => {
  const userCurrent = await currentUser();
  const existingLike = await CheckLike(post.id);

  if (!existingLike) {
    await db.like.create({
      data: {
        user: { connect: { id: userCurrent?.id } },
        post: { connect: { id: post.id } },
      },
    });
  } else {
    await db.like.delete({
      where: {
        id: existingLike.id,
      },
    });
  }
};
