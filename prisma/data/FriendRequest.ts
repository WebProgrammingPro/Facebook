import { currentUser } from "@/lib/auth";

import { db } from "@/lib/db";

export const CheckFriendRequest = async (friendId: string) => {
  const user = await currentUser();

  try {
    const friendRequest = await db.friendRequest.findFirst({
      where: {
        OR: [
          { senderId: user?.id, receiverId: friendId },
          { senderId: friendId, receiverId: user?.id },
        ],
      },
    });

    return friendRequest;
  } catch (error) {
    return null;
  }
};

export const CheckRespondFriendRequest = async (friendId: string) => {
  const user = await currentUser();

  try {
    const friendRequest = await db.friendRequest.findFirst({
      where: {
        senderId: friendId,
        receiverId: user?.id,
      },
    });

    return friendRequest;
  } catch (error) {
    return null;
  }
};

export const CheckConfirmFriendRequest = async () => {
  const user = await currentUser();

  try {
    const friendRequest = await db.friendRequest.findFirst({
      where: { senderId: user?.id },
    });

    return friendRequest;
  } catch (error) {
    return null;
  }
};
