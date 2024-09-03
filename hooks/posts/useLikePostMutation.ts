import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { PostData } from "@/lib/types/posts";

const likePostApi = async (post: PostData) => {
  const { data } = await axios.post(`/posts/${post.id}/like`);

  return data;
};

export function useLikePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: likePostApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
