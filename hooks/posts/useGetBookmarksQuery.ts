import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { BookmarksData } from "@/lib/types/bookmarks";

const fetchBookmarks = async () => {
  const { data } = await axios.get<BookmarksData[]>("/posts/bookmarks");

  return data;
};

export default function useGetBookmarksQuery() {
  const query = useQuery({
    queryKey: ["bookmarks"],
    queryFn: fetchBookmarks,
  });

  return query;
}
