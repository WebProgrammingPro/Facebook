"use client";

import useGetPostsQuery from "@/hooks/posts/useGetPostsQuery";

import PostsLoadingSkeleton from "@/components/PostsLoadingSkeleton";
import { PostCard } from "./PostCard";

const ForYouFeed = () => {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <PostsLoadingSkeleton />
        <PostsLoadingSkeleton />
        <PostsLoadingSkeleton />
      </div>
    );
  }

  return (
    <div>
      {data?.length ? (
        data.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <PostCard />
      )}
    </div>
  );
};

export default ForYouFeed;
