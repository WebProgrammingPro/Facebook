"use server";

import { revalidatePath } from "next/cache";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

import {
  CheckConfirmFriendRequest,
  CheckFriendRequest,
} from "@/prisma/data/FriendRequest";
import { CheckFriendship } from "@/prisma/data/Friendship";

export const FriendRequestAction = async (friendId: string, type: string) => {
  const userCurrent = await currentUser();
  if (userCurrent?.id === friendId) return null;

  const existingFriendRequest = await CheckFriendRequest(friendId);
  const existingCheckConfirmFriendRequest = await CheckConfirmFriendRequest();

  const existingFriendship = await CheckFriendship(friendId);

  switch (type) {
    case "addFriend":
      if (existingFriendRequest) return null;
      if (existingFriendship) return null;

      await db.friendRequest.create({
        data: {
          sender: { connect: { id: userCurrent?.id } },
          receiver: { connect: { id: friendId } },
        },
      });
      break;

    case "cancelRequest":
      await db.friendRequest.deleteMany({
        where: {
          OR: [{ senderId: friendId }, { receiverId: friendId }],
        },
      });
      break;

    case "confirmFriend":
      if (existingCheckConfirmFriendRequest) return null;
      if (!existingFriendRequest) return null;

      await db.friendRequest.deleteMany({
        where: {
          OR: [{ senderId: friendId }, { receiverId: friendId }],
        },
      });

      await db.friendship.create({
        data: {
          sender: { connect: { id: userCurrent?.id } },
          receiver: { connect: { id: friendId } },
        },
      });
      break;

    case "unfriend":
      await db.friendship.deleteMany({
        where: { OR: [{ senderId: friendId }, { receiverId: friendId }] },
      });
      break;
  }

  revalidatePath("/profile");
};
