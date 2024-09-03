import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputCommentSchema, FormInputCommentValues } from "@/schemas";

import { useCreateCommentMutation } from "@/hooks/comments/useCreateCommentMutation";

import { PostData } from "@/lib/types/posts";

import { useCurrentUser } from "@/hooks/use-current-user";

import ImageAvatar from "@/components/avatar/ImageAvatar";
import FormComment from "./FormComment";
import CommentsFeed from "./CommentsFeed";

interface CommentsFeedProps {
  post: PostData;
}

const Comments = ({ post }: CommentsFeedProps) => {
  const form = useForm<FormInputCommentValues>({
    resolver: zodResolver(FormInputCommentSchema),
    defaultValues: {
      content: "",
      postId: post.id || "",
    },
  });

  const userCurrent = useCurrentUser();
  const { mutate: mutation } = useCreateCommentMutation();

  const handleCreateComment = (values: FormInputCommentValues) => {
    mutation(values, {
      onSuccess: async () => {
        form.reset();
      },
    });
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
            form={form}
          />
        </div>
      </div>
      <div className="space-y-4">
        <CommentsFeed post={post} />
      </div>
    </div>
  );
};

export default Comments;
