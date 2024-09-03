import Link from "next/link";

import { CommentData } from "@/lib/types/comments";

import { Button } from "@/components/ui/button";

import ImageAvatar from "@/components/avatar/ImageAvatar";
import { formatRelativeDate } from "@/lib/utils";
import NameAvatar from "../avatar/NameAvatar";

interface CommentCardProps {
  comment?: CommentData;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  if (!comment) return <h1>Not Data Comments</h1>;

  return (
    <div className="flex space-x-2">
      <ImageAvatar user={comment.user} />
      <div>
        <div className="inline-block max-w-[calc(100%-26px)] break-words align-middle">
          <div className="relative inline-block min-w-[250px] max-w-full bg-gray-100 rounded-2xl whitespace-normal">
            <div className="py-3 px-2">
              <span className="inline">
                <Link href={`/profile/${comment.userId}`}>
                  <span className="block min-w-0 max-w-full text-xs font-semibold leading-tight break-words">
                    <NameAvatar user={comment.user} />
                  </span>
                </Link>
              </span>
              <div className="block py-1">
                <span className="text-sm break-all">{comment.content}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <Button variant="ghost" size="sm" className="text-xs">
            Like
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            Reply
          </Button>
          <span className="text-xs text-muted-foreground">1h ago</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
