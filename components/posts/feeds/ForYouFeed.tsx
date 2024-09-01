"use client";

import useGetPostsQuery from "@/hooks/posts/useGetPostsQuery";

import PostsLoadingSkeleton from "@/components/PostsLoadingSkeleton";
import NotFoundPost from "./NotFoundPost";
import PostCard from "../card/PostCard";

const ForYouFeed = () => {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    <div className="space-y-5">
      <PostsLoadingSkeleton />
      <PostsLoadingSkeleton />
      <PostsLoadingSkeleton />
    </div>;
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
