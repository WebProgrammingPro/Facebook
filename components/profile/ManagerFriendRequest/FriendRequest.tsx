import { Button } from "@/components/ui/button";

import { UserPlus, UserX } from "lucide-react";

import { CheckFriendRequest } from "@/prisma/data/FriendRequest";
import FriendRequestButton from "./FriendRequestButton";

interface FriendRequestProps {
  friendId: string;
}

const FriendRequest = async ({ friendId }: FriendRequestProps) => {
  const FriendRequest = await CheckFriendRequest(friendId);

  return (
    <Button variant="outline" size="sm" className="px-0">
      <FriendRequestButton
        friendId={friendId}
        type={!FriendRequest ? "addFriend" : "cancelRequest"}
        button
      >
        {!FriendRequest ? <UserPlus /> : <UserX />}
        <span>{!FriendRequest ? "Add Friend" : "Cancel Request"}</span>
      </FriendRequestButton>
    </Button>
  );
};

export default FriendRequest;
