import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { PostData } from "@/lib/types/posts";

const bookmarkPostApi = async (values: PostData) => {
  const { data } = await axios.patch(`/posts/${values.id}/bookmark`, values);

  return data;
};

export function useSaveOrUnSaveBookmarkMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: bookmarkPostApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  return mutation;
}
