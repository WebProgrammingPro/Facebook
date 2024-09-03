import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

interface FriendsUnfriendRequestProps {
  friendId: string;
}

const FriendsUnfriendRequest = ({ friendId }: FriendsUnfriendRequestProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <div className="flex items-center gap-2">
            <UserCheck />
            <span>Friends</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <AlertDialog>
            <DropdownMenu>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <UserX />
                    <span>Unfriend</span>
                  </div>
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenu>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Unfriend Mahmoud Hariri</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you Sure You Want To Remove Mahmoud Hariri As Your Friend?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="select-none">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="select-none">
                  <FriendRequestButton friendId={friendId} type="unfriend">
                    Confirm
                  </FriendRequestButton>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FriendsUnfriendRequest;
