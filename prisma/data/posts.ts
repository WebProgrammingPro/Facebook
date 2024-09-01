import axios from "axios";

import { PostData } from "@/lib/types";

export const fetchPostsForYou = async () => {
  const { data } = await axios.get<PostData[]>("/api/posts/for-you");

  return data;
};
