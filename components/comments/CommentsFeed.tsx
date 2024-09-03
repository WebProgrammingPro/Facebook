import useGetCommentsQuery from "@/hooks/comments/useGetCommentsQuery";

import { PostData } from "@/lib/types/posts";

import CommentCard from "./CommentCard";
import PostsLoadingSkeleton from "../PostsLoadingSkeleton";

interface CommentsFeedProps {
  post: PostData;
}

const CommentsFeed = ({ post }: CommentsFeedProps) => {
  const { data, isLoading } = useGetCommentsQuery({ postId: post.id });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <PostsLoadingSkeleton />
      </div>
    );
  }

  return data?.length ? (
    data.map((comment) => <CommentCard key={comment.id} comment={comment} />)
  ) : (
    <CommentCard />
  );
};

export default CommentsFeed;
