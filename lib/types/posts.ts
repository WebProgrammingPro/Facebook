import { ExtendedUser } from "@/next-auth-d";
import { BookmarksData } from "./bookmarks";

export interface PostData {
  id: string;
  audience: string;
  content: string;
  userId: string;
  isTrashed: boolean;

  user?: ExtendedUser;
  bookmarks?: BookmarksData[];
  _count?: {
    likes: number;
    comments: number;
  };
  isLikedByCurrentUser?: boolean;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
