import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import { LogOut, Settings, UserIcon } from "lucide-react";

import { currentUser } from "@/lib/auth";

import ImageAvatar from "../avatar/ImageAvatar";
import NameAvatar from "../avatar/NameAvatar";
import SignOutButton from "./SignOutButton";

const UserButton = async () => {
  const user = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <ImageAvatar user={user} />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex items-center gap-2 select-none cursor-default">
              <ImageAvatar user={user} />
              <NameAvatar user={user} />
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={`/profile/${user?.id}`}>
            <DropdownMenuItem>
              <UserIcon className="mr-2 w-4 h-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Settings className="mr-2 w-4 h-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <SignOutButton>
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 w-4 h-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
