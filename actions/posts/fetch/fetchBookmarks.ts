import axios from "@/lib/axios";

export const fetchBookmarks = async () => {
  const { data } = await axios.get("/posts/bookmarks");

  return data;
};
