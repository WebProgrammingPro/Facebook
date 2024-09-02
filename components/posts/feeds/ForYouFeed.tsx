"use client";

import useGetPostsQuery from "@/hooks/posts/useGetPostsQuery";

import PostsLoadingSkeleton from "@/components/PostsLoadingSkeleton";
import PostCard from "../card/PostCard";
import NotFoundPost from "@/components/prefabs/display/NotFoundPost";

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
        <NotFoundPost />
      )}
    </div>
  );
};

export default ForYouFeed;
