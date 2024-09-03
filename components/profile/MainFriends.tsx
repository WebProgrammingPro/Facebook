import Link from "next/link";

import CardWrapper from "../CardWrapper";
import ImageAvatar from "../avatar/ImageAvatar";
import NameAvatar from "../avatar/NameAvatar";

import { Friendship } from "@/prisma/data/Friendship";
import ManagerFriendRequestButton from "./ManagerFriendRequest/ManagerFriendRequestButton";

interface MainFriendsProps {
  userId: string;
}

const MainFriends = async ({ userId }: MainFriendsProps) => {
  const friends = await Friendship(userId);

  return (
    <div className="flex flex-wrap gap-4 w-full p-4">
      {friends.map((friend) => (
        <CardWrapper key={friend?.id} className="w-[calc(100%/5)]">
          <div className="flex flex-col items-center gap-4">
            <Link href={`/profile/${friend?.id}`}>
              <div className="flex flex-col items-center gap-3">
                <ImageAvatar className="w-20 h-20" user={friend} />
                <NameAvatar user={friend} />
              </div>
            </Link>
            <ManagerFriendRequestButton friendId={friend.id} />
          </div>
        </CardWrapper>
      ))}
    </div>
  );
};

export default MainFriends;
