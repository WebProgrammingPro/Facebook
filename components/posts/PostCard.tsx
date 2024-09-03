import Link from "next/link";
import { createContext, useContext, useState } from "react";

import { PostData } from "@/lib/types/posts";
import { formatRelativeDate } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { Ellipsis, MessageCircle, ThumbsUp } from "lucide-react";

import { useLikePostMutation } from "@/hooks/posts/useLikePostMutation";

import IsReadMorePage from "@/components/prefabs/page/IsReadMorePage";
import ImageAvatar from "@/components/avatar/ImageAvatar";
import NameAvatar from "@/components/avatar/NameAvatar";
import ButtonClick from "@/components/ButtonClick";
import ManagerBookmarks from "./button/ManagerBookmarks";
import EditPost from "./button/EditPost";
import MoveToTrashPost from "./button/MoveToTrashPost";
import Comments from "../comments/Comments";

type PostCardContextType = {
  post: PostData;
};

const PostCardContext = createContext<PostCardContextType | undefined>(
  undefined
);
function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error(
      "usePostCardContext must be used within a PostCardProvider"
    );
  }

  return context;
}

interface PostCardProps {
  post?: PostData;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [showComments, setShowComments] = useState<boolean>(false);

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
    <PostCardContext.Provider value={{ post }}>
      <div className="relative w-full mb-4 z-0">
        <div className="relative z-0">
          <Card>
            <CardHeader>
              <PostCard.Header />
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
                <PostCard.Buttons setShowComments={setShowComments} />
                {showComments && <Comments post={post} />}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PostCardContext.Provider>
  );
};

PostCard.Header = function PostCardHeader() {
  const { post } = usePostCardContext();

  return (
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
      <PostCard.MorePost />
    </div>
  );
};

PostCard.MorePost = function PostCardMorePost() {
  const { post } = usePostCardContext();
  const userCurrent = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center w-9 h-9 py-2 px-2 rounded-full cursor-pointer hover:bg-gray-200">
          <Ellipsis />
        </div>
      </DropdownMenuTrigger>
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
    </DropdownMenu>
  );
};

interface PostButtonProps {
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
}

PostCard.Buttons = function PostCardButtons({
  setShowComments,
}: PostButtonProps) {
  const { post } = usePostCardContext();
  const { mutate: mutation } = useLikePostMutation();

  const onClickLike = () => {
    mutation(post);
  };

  return (
    <div className="flex flex-row flex-1">
      <ButtonClick onClick={onClickLike}>
        <Button
          variant="ghost"
          className={`gap-1 w-full flex-1 ${
            post.isLikedByCurrentUser && "text-blue-600"
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
          <span>Like</span>
        </Button>
      </ButtonClick>
      <ButtonClick onClick={() => setShowComments((prev) => !prev)}>
        <Button variant="ghost" className="gap-1 w-full flex-1">
          <MessageCircle className="w-4 h-4" />
          <span>Comment</span>
        </Button>
      </ButtonClick>
    </div>
  );
};
