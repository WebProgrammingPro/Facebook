"use server";

import { PostData } from "@/lib/types";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const DeletePostAction = async (values: PostData) => {
  const userCurrent = await currentUser();

  if (values.userId !== userCurrent?.id)
    return { error: "You Can't Delete This Post Because It's Not Yours" };

  await db.post.delete({ where: { id: values.id } });

  return { success: "Deleted Post Successfully" };
};
