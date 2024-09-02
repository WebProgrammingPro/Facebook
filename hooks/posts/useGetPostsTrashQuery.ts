import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { PostData } from "@/lib/types/posts";

const fetchPostsTrashApi = async () => {
  const response = await axios.get<PostData>("posts?isTrashed=true");

  return response;
};

export default function useGetPostsTrashQuery() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostsTrashApi,
  });

  return query;
}
