"use server";

import bcrypt from "bcryptjs";

import { SignUpSchema, SignUpValues } from "@/schemas";

import { getUserByEmail } from "@/prisma/data/user";
import { db } from "@/lib/db";

export const SignUpAction = async (values: SignUpValues) => {
  const validatedFields = SignUpSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Fields" };

  const { first_name, last_name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) return { error: "Email Already In Use" };

  await db.user.create({
    data: { first_name, last_name, email, password: hashedPassword },
  });

  return { success: "Created Successfully" };
};
