import { cn } from "@/lib/utils";

import { ExtendedUser } from "@/next-auth-d";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ImageAvatarProps {
  className?: string;
  user?: ExtendedUser;
}

const ImageAvatar = ({ className, user }: ImageAvatarProps) => {
  return (
    <Avatar className={`${cn(className)} border select-none`}>
      <AvatarImage
        className="object-cover"
        src={user?.image || ""}
        alt="Avatar"
      />
      <AvatarFallback className="text-xl">
        {(user?.first_name || "").charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default ImageAvatar;
