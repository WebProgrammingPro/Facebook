import { Post, User } from "@prisma/client";

export interface BookmarksData {
  id: string;

  user: User;
  post: Post;

  createdAt: Date;
}
