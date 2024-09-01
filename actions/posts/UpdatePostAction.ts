"use server";

import { FormInputPostSchema, FormInputPostValues } from "@/schemas";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const UpdatePostAction = async (
  values: FormInputPostValues,
  postId: string
) => {
  const validatedFields = FormInputPostSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Fields" };

  const { content } = validatedFields.data;
  const userCurrent = await currentUser();

  await db.post.update({
    where: { id: postId },
    data: {
      content,
      userId: userCurrent?.id,
    },
  });

  return { success: "Updated Post Successfully" };
};
