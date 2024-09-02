import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { FormInputCommentValues } from "@/schemas";

const createCommentApi = async (values: FormInputCommentValues) => {
  const { data } = await axios.post("/comments", values);

  return data;
};

export function useCreateCommentMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCommentApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return mutation;
}
