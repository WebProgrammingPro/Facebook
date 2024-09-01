import { currentUser } from "@/lib/auth";

import { db } from "@/lib/db";

export const CheckFriendship = async (friendId: string) => {
  const user = await currentUser();

  try {
    const friendship = await db.friendship.findFirst({
      where: {
        OR: [
          { senderId: user?.id, receiverId: friendId },
          { senderId: friendId, receiverId: user?.id },
        ],
      },
    });

    return friendship;
  } catch (error) {
    return null;
  }
};

export const Friendship = async (friendId: string) => {
  const user = await currentUser();

  const sentFriendships = await db.friendship.findMany({
    where: { senderId: friendId },
    include: { receiver: true },
  });

  const receivedFriendships = await db.friendship.findMany({
    where: { receiverId: friendId },
    include: { sender: true },
  });

  const friends = [
    ...sentFriendships.map((friendship) => friendship.receiver),
    ...receivedFriendships.map((friendship) => friendship.sender),
  ];

  const uniqueFriends = friends.filter((friend) => friend?.id !== user?.id);

  return uniqueFriends;
};
