import { Prisma } from "@prisma/client";

export type AuthFlow = "SignIn" | "SignUp";

export interface AuthCard {
  setState: (state: AuthFlow) => void;
}

export interface MessageTypes {
  error?: string;
  success?: string;
}

export function getUserDataSelect() {
  return {
    first_name: true,
    last_name: true,
    image: true,
  } satisfies Prisma.UserSelect;
}

export function getPostDataInclude(loggedInUserId?: string) {
  return {
    user: {
      select: getUserDataSelect(),
    },
    bookmarks: {
      where: {
        userId: loggedInUserId,
      },
    },
    _count: {
      select: {
        likes: true,
        comments: true,
      },
    },
    likes: {
      select: {
        userId: true,
      },
    },
  } satisfies Prisma.PostInclude;
}
