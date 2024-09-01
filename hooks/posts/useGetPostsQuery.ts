import { useQuery } from "@tanstack/react-query";

import { Post } from "@prisma/client";

import { fetchPosts } from "@/prisma/data/posts/posts";

export default function useGetPostsQuery() {
  const query = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return query;
}
