import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { CommentData } from "@/lib/types/comments";

const fetchCommentsApi = async (postId: string) => {
  const { data } = await axios.get<CommentData[]>(`/comments/${postId}`);

  return data;
};

export default function useGetCommentsQuery({ postId }: { postId: string }) {
  const query = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchCommentsApi(postId),
  });

  return query;
}
