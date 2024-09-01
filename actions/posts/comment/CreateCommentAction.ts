"use server";

import { FormInputCommentSchema, FormInputCommentValues } from "@/schemas";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const CreateCommentAction = async (values: FormInputCommentValues) => {
  const validatedFields = FormInputCommentSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Fields" };

  const { content, postId } = validatedFields.data;
  const userCurrent = await currentUser();

  await db.comment.create({
    data: {
      content,
      user: { connect: { id: userCurrent?.id } },
      post: { connect: { id: postId } },
    },
  });

  return { success: "Created Post Successfully" };
};
