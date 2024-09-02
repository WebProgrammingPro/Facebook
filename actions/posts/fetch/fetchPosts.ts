import axios from "@/lib/axios";

export const fetchPostsTrash = async () => {
  const { data } = await axios.get("posts?isTrashed=true");

  return data;
};
