import axios from "@/lib/axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormInputPostValues } from "@/schemas";

const createPostApi = async (values: FormInputPostValues) => {
  const { data } = await axios.post("/posts", values);

  return data;
};

export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPostApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
