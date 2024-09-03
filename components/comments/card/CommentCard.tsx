import Link from "next/link";

import { Button } from "@/components/ui/button";

import ImageAvatar from "@/components/avatar/ImageAvatar";

const CommentCard = () => {
  return (
    <div className="flex space-x-2">
      <ImageAvatar />
      <div>
        <div className="inline-block max-w-[calc(100%-26px)] break-words align-middle">
          <div className="relative inline-block max-w-full bg-gray-100 rounded-2xl whitespace-normal">
            <div className="py-3 px-2">
              <span className="inline">
                <Link href={""}>
                  <span className="block min-w-0 max-w-full text-xs font-semibold leading-tight break-words">
                    Alice Smith
                  </span>
                </Link>
              </span>
              <div className="block py-1">
                <span className="text-sm break-all">
                  dsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdf
                </span>
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
