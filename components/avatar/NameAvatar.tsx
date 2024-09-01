import { cn, getFullName } from "@/lib/utils";

import { ExtendedUser } from "@/next-auth-d";

interface NameAvatarProps {
  className?: string;
  user?: ExtendedUser;
}

const NameAvatar = ({ className, user }: NameAvatarProps) => {
  return (
    <div className="flex flex-row">
      <span
        className={`${cn(
          className
        )} block min-w-0 max-w-full break-words text-xs`}
      >
        {getFullName(user)}
      </span>
    </div>
  );
};

export default NameAvatar;
