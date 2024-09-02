import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { PostData } from "@/lib/types/posts";

const fetchPostsApi = async () => {
  const { data } = await axios.get<PostData[]>("/posts/for-you");

  return data;
};

export default function useGetPostsQuery() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostsApi,
  });

  return query;
}
