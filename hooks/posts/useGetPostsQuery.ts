import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { PostData } from "@/lib/types/posts";

const fetchPostsApi = async () => {
  const response = await axios.get<PostData[]>("/posts/for-you");

  return response.data;
};

export default function useGetPostsQuery() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostsApi,
  });

  return query;
}
