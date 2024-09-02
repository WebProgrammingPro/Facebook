import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { FormInputPostValues } from "@/schemas";

const editPostApi = async (values: FormInputPostValues) => {
  const { data } = await axios.patch(`/posts/${values.id}`, values);

  return data;
};

export function useEditPostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: editPostApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
