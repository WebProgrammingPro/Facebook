import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ExtendedUser } from "@/next-auth-d";

import { formatRelative } from "date-fns";
import { PostData } from "./types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeWords = (string?: string | null) => {
  const words = string?.split(/(\W+)/);

  const capitalizedWords = words?.map((word) => {
    if (/^[a-zA-Z]/.test(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });

  return capitalizedWords?.join("");
};

export const getFullName = (user?: ExtendedUser) => {
  return (
    capitalizeWords(user?.first_name) + " " + capitalizeWords(user?.last_name)
  );
};

export function formatRelativeDate(post: PostData) {
  return formatRelative(new Date(post.createdAt), new Date());
}
