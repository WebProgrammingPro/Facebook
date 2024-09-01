"use server";

import bcrypt from "bcryptjs";

import { SignInSchema, SignInValues } from "@/schemas";

import { DEFAULT_LOGIN_REDIRECT } from "@/router";

import { getUserByEmail } from "@/prisma/data/user";
import { signIn } from "@/auth";

export const SignInAction = async (values: SignInValues) => {
  const validatedFields = SignInSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Fields" };

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser) return { error: "Email Does Not Exist" };

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) return { error: "Incorrect Password" };

  await signIn("credentials", {
    email,
    password,
    redirectTo: DEFAULT_LOGIN_REDIRECT,
  });
};
