"use client";

import { FriendRequestAction } from "@/actions/profile/FriendRequestAction";

interface FriendRequestButtonProps {
  children: React.ReactNode;
  friendId: string;
  type: string;
  button?: boolean;
}

const FriendRequestButton = ({
  children,
  friendId,
  type,
  button,
}: FriendRequestButtonProps) => {
  const onClick = () => {
    FriendRequestAction(friendId, type);
  };

  return (
    <span
      className={`flex items-center gap-2 ${button ? "h-8 px-3" : ""} flex-1`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default FriendRequestButton;
