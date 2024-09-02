"use client";

import Link from "next/link";

import useGetBookmarksQuery from "@/hooks/posts/useGetBookmarksQuery";
import { useSaveOrUnSaveBookmarkMutation } from "@/hooks/posts/useSaveOrUnSaveBookmarkMutation";

import Container from "../Container";
import PostsLoadingSkeleton from "../PostsLoadingSkeleton";
import PostCard from "../posts/card/PostCard";
import CardWrapper from "../CardWrapper";
import ImageAvatar from "../avatar/ImageAvatar";
import { getFullName } from "@/lib/utils";
import ButtonClick from "../ButtonClick";
import { Button } from "../ui/button";
import { BookmarkX } from "lucide-react";
import TopNavbar from "../TopNavbar";

const MainSaved = () => {
  const { data: bookmarks, isLoading } = useGetBookmarksQuery();
  const { mutate: saveOrUnSaveBookmark } = useSaveOrUnSaveBookmarkMutation();

  const onClick = () => {};

  return (
    <TopNavbar>
      <div>
        <Container>
          <div className="w-full max-w-full py-8 px-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold">All</span>
            </div>
            <div>
              {isLoading ? (
                <PostsLoadingSkeleton />
              ) : bookmarks?.length ? (
                <h1></h1>
              ) : (
                bookmarks.map((bookmark) => console.log(bookmark))

                // bookmarks.map((bookmark) => (
                //   <div key={bookmark.postId} className="mb-4">
                //     <CardWrapper>
                //       <div className="flex gap-2">
                //         <div className="flex flex-col content-center">
                //           <ImageAvatar
                //             className="w-32 h-32"
                //             user={bookmark.user}
                //           />
                //         </div>
                //         <div className="flex flex-col content-between min-w-0 mt-1 ml-4 flex-grow">
                //           <Link href={""} className="hover:underline">
                //             <span>{bookmark.}</span>
                //           </Link>
                //           <div className="flex flex-col content-between flex-grow">
                //             <div className="mt-3">
                //               <div className="flex items-center">
                //                 <div>
                //                   <ImageAvatar
                //                     className="w-8 h-8"
                //                     user={bookmark.user}
                //                   />
                //                 </div>
                //                 <div className="ml-2">
                //                   <span className="text-sm font-light text-gray-400">
                //                     Saved From{" "}
                //                   </span>
                //                   <Link href={""} className="hover:underline">
                //                     {getFullName(bookmark.user)}&apos;s post
                //                   </Link>
                //                 </div>
                //               </div>
                //             </div>
                //             <div className="mt-3">
                //               <div className="relative flex flex-row items-center content-center pt-4 pr-3 pl-3">
                //                 <div className="relative flex flex-col max-w-full p-1 flex-shrink flex-grow">
                //                   <div className="flex flex-wrap flex-row">
                //                     <ButtonClick
                //                       onClick={() => onClick(bookmark.content)}
                //                     >
                //                       <Button variant="outline" size="sm">
                //                         <BookmarkX />
                //                         <span>Unsaved</span>
                //                       </Button>
                //                     </ButtonClick>
                //                   </div>
                //                 </div>
                //               </div>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </CardWrapper>
                //   </div>
                // ))
              )}
            </div>
          </div>
        </Container>
      </div>
    </TopNavbar>
  );
};

export default MainSaved;
