import { MessageCircle, ThumbsUp } from "lucide-react";

import { Button } from "../ui/button";

import ButtonClick from "../ButtonClick";
import { PostData } from "@/lib/types/posts";

interface PostButtonProps {
  post: PostData;
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostButton = ({ post, setShowComments }: PostButtonProps) => {
  const onClickLike = () => {};

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

export default PostButton;
