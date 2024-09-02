import axios from "@/lib/axios";

import { PostData } from "@/lib/types";

export const fetchPosts = async (): Promise<PostData[]> => {
  const { data } = await axios.get("/posts/for-you");

  return data;
};

export const fetchPostsTrash = async () => {
  const { data } = await axios.get("posts?isTrashed=true");

  return data;
};
