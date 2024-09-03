import { ExtendedUser } from "@/next-auth-d";

export interface CommentData {
  id: string;
  content: string;

  userId: string;
  postId: string;

  user?: ExtendedUser;

  createdAt: Date;
}
