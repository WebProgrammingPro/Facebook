import { useState } from "react";

import { PostData } from "@/lib/types/posts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import HeaderPost from "../HeaderPost";
import IsReadMorePage from "@/components/prefabs/page/IsReadMorePage";
import PostButton from "../PostButton";
import Comments from "@/components/comments/Comments";

interface PostCardProps {
  post?: PostData;
}

const PostCard = ({ post }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);

  if (!post)
    return (
      <div className="relative w-full mb-4 z-0">
        <div className="relative z-0">
          <Card>
            <CardContent className="p-5">
              <div>
                <p className="break-all whitespace-pre-wrap">Not Found Post</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );

  return (
    <div className="relative w-full mb-4 z-0">
      <div className="relative z-0">
        <Card>
          <CardHeader>
            <HeaderPost post={post} />
          </CardHeader>
          <CardContent>
            <div>
              <IsReadMorePage post={post} />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-row justify-between pb-2 border-b">
                <span className="text-xs">{post._count?.likes} Likes</span>
                <span className="text-xs">20 Comments</span>
              </div>
              <PostButton post={post} setShowComments={setShowComments} />
              {showComments && <Comments post={post} />}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PostCard;
