import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editPostAction } from "@/actions/posts/editPostAction";

export function useEditPostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: editPostAction,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
