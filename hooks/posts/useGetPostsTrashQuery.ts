import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

const fetchPostsTrashApi = async () => {
  const response = await axios.get("posts?isTrashed=true");

  return response;
};

export default function useGetPostsTrashQuery() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostsTrashApi,
  });

  return query;
}
