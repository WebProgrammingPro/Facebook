import { z } from "zod";

import { Audience } from "@prisma/client";

export const SignInSchema = z.object({
  email: z.string().email({ message: "Email Is Required" }),
  password: z.string().min(1, { message: "Password Is Required" }),
});
export type SignInValues = z.infer<typeof SignInSchema>;

export const SignUpSchema = z.object({
  first_name: z.string().min(1, { message: "First Name Is Required" }),
  last_name: z.string().min(1, { message: "Last Name Is Required" }),
  email: z.string().email({ message: "Email Is Required" }),
  password: z.string().min(1, { message: "Password Is Required" }),
});
export type SignUpValues = z.infer<typeof SignUpSchema>;

export const FormInputPostSchema = z.object({
  id: z.optional(z.string()),
  audience: z.enum([Audience.Public, Audience.Friends, Audience.Only]),
  content: z.string().min(1, { message: "Post Is Required" }),
});
export type FormInputPostValues = z.infer<typeof FormInputPostSchema>;

export const FormInputCommentSchema = z.object({
  id: z.optional(z.string()),
  content: z.string().min(1, { message: "Comment Is Required" }),
  postId: z.string().min(1, { message: "Post ID Is Required" }),
});
export type FormInputCommentValues = z.infer<typeof FormInputCommentSchema>;
