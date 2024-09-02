import { useMutation, useQueryClient } from "@tanstack/react-query";

import { bookmarkPostAction } from "@/actions/posts/bookmarkPostAction";

export function useSaveOrUnSaveBookmarkMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: bookmarkPostAction,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
