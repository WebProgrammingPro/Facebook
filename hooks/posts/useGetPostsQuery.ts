import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

const fetchPostsApi = async () => {
  const response = await axios.get("/posts/for-you");

  return response.data;
};

export default function useGetPostsQuery() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostsApi,
  });

  return query;
}
