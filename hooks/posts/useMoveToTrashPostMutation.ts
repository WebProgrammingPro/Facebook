import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "@/lib/axios";

const moveToTrashPostApi = async (id: string) => {
  const { data } = await axios.patch(`/posts/${id}/moveToTrash`);

  return data;
};

export function useMoveToTrashPostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: moveToTrashPostApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
