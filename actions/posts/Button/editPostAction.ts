import axios from "@/lib/axios";

import { FormInputPostValues } from "@/schemas";

export const editPostAction = async (values: FormInputPostValues) => {
  const response = await axios.patch(`/posts/${values.id}`, values);

  return response;
};
