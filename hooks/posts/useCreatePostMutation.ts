import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CreatePostAction } from "@/actions/posts/CreatePostAction";

export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: CreatePostAction,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
