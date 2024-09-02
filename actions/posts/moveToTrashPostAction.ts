import axios from "axios";

export const moveToTrashPostAction = async (postId: string) => {
  const response = await axios.patch(`/api/posts/${postId}/moveToTrash`);

  return response;
};
