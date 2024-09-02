import axios from "@/lib/axios";

import { PostData } from "@/lib/types";

export const bookmarkPostAction = async (values: PostData) => {
  const response = await axios.patch(`/posts/${values.id}/bookmark`, values);

  return response;
};
