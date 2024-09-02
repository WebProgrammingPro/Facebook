import { useQuery } from "@tanstack/react-query";

import { fetchBookmarks } from "@/actions/posts/fetch/fetchBookmarks";

export default function useGetBookmarksQuery() {
  const query = useQuery({
    queryKey: ["bookmarks"],
    queryFn: fetchBookmarks,
  });

  return query;
}
