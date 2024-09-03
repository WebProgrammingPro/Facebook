import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { UserCheck, UserX } from "lucide-react";

import FriendRequestButton from "./FriendRequestButton";

interface RespondFriendProps {
  friendId: string;
}

const RespondFriend = ({ friendId }: RespondFriendProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <div className="flex items-center gap-2">
            <UserX />
            <span>Respond</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <FriendRequestButton friendId={friendId} type="confirmFriend">
            <DropdownMenuItem className="gap-2 w-full cursor-pointer">
              <UserCheck />
              <span>Confirm</span>
            </DropdownMenuItem>
          </FriendRequestButton>
          <FriendRequestButton friendId={friendId} type="cancelRequest">
            <DropdownMenuItem className="gap-2 w-full cursor-pointer">
              <UserX />
              <span>Delete Request</span>
            </DropdownMenuItem>
          </FriendRequestButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RespondFriend;
