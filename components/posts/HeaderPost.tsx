import Link from "next/link";

import { PostData } from "@/lib/types";
import { formatRelativeDate } from "@/lib/utils";

import Header from "../Header";
import ImageAvatar from "../avatar/ImageAvatar";
import NameAvatar from "../avatar/NameAvatar";
import MorePost from "./MorePost";

interface HeaderPostProps {
  post: PostData;
}

const HeaderPost = ({ post }: HeaderPostProps) => {
  return (
    <Header>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 font-semibold">
            <Link href={`/profile/${post.userId}`}>
              <ImageAvatar className="w-8 h-8" user={post.user} />
            </Link>
            <div>
              <Link href={`/profile/${post.userId}`}>
                <NameAvatar user={post.user} />
              </Link>
              <div className="text-xs text-muted-foreground font-normal">
                {formatRelativeDate(post)}
              </div>
            </div>
          </div>
        </div>
        <MorePost post={post} />
      </div>
    </Header>
  );
};

export default HeaderPost;
