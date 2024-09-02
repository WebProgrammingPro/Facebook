import { useCreateCommentMutation } from "@/hooks/comments/useCreateCommentMutation";

import { FormInputCommentValues } from "@/schemas";
import { PostData } from "@/lib/types/posts";

import { useCurrentUser } from "@/hooks/use-current-user";

import CommentCard from "./card/CommentCard";
import ImageAvatar from "@/components/avatar/ImageAvatar";
import FormComment from "./form/FormComment";

interface CommentsFeedProps {
  post: PostData;
}

const CommentsFeed = ({ post }: CommentsFeedProps) => {
  const userCurrent = useCurrentUser();
  const { mutate: mutation } = useCreateCommentMutation();

  const handleCreateComment = (values: FormInputCommentValues) => {
    mutation(values);
  };

  return (
    <div className="pt-4 border-t">
      <div className="flex items-center space-x-2 mb-4">
        <ImageAvatar user={userCurrent} />
        <div className="flex flex-1">
          <FormComment
            user={userCurrent}
            onSubmit={handleCreateComment}
            isEditing={false}
            initialValue={{ postId: post.id }}
          />
        </div>
      </div>
      <div className="space-y-4">
        <CommentCard />
      </div>
    </div>
  );
};

export default CommentsFeed;
