import { PostData } from "@/lib/types";

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

import { useCurrentUser } from "@/hooks/use-current-user";

import DropdownEllipsis from "../DropdownEllipsis";
import ManagerBookmarks from "./button/ManagerBookmarks";
import EditPost from "./button/EditPost";
import MoveToTrashPost from "./button/MoveToTrashPost";

interface MorePostProps {
  post: PostData;
}

const MorePost = ({ post }: MorePostProps) => {
  const userCurrent = useCurrentUser();

  return (
    <DropdownEllipsis>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <ManagerBookmarks post={post} />
          {userCurrent?.id === post.userId && (
            <>
              <DropdownMenuSeparator />
              <EditPost post={post} />
              <MoveToTrashPost data={post} />
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownEllipsis>
  );
};

export default MorePost;
