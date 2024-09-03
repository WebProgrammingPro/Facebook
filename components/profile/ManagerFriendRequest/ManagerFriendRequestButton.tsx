import FriendRequest from "./FriendRequest";
import RespondFriend from "./RespondFriend";
import FriendsUnfriendRequest from "./FriendsUnfriendRequest";

import { CheckFriendship } from "@/prisma/data/Friendship";
import {
  CheckFriendRequest,
  CheckRespondFriendRequest,
} from "@/prisma/data/FriendRequest";

interface ManagerFriendRequestButtonProps {
  friendId: string;
}

const ManagerFriendRequestButton = async ({
  friendId,
}: ManagerFriendRequestButtonProps) => {
  const friendship = await CheckFriendship(friendId);
  const friendRequest1 = await CheckFriendRequest(friendId);
  const checkRespondButtonStatus = await CheckRespondFriendRequest(friendId);

  return (
    <div className="flex gap-4">
      {!friendship ? (
        <>
          {!friendRequest1 ? (
            <FriendRequest friendId={friendId} />
          ) : (
            <>
              {checkRespondButtonStatus ? (
                <RespondFriend friendId={friendId} />
              ) : (
                <FriendRequest friendId={friendId} />
              )}
            </>
          )}
        </>
      ) : (
        <FriendsUnfriendRequest friendId={friendId} />
      )}
    </div>
  );
};

export default ManagerFriendRequestButton;
