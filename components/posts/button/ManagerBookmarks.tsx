import { useSaveOrUnSaveBookmarkMutation } from "@/hooks/posts/useSaveOrUnSaveBookmarkMutation";

import { PostData } from "@/lib/types";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { Bookmark, BookmarkX } from "lucide-react";

import ButtonClick from "@/components/ButtonClick";

interface ManagerBookmarksProps {
  post: PostData;
}

const ManagerBookmarks = ({ post }: ManagerBookmarksProps) => {
  const { mutate: mutation } = useSaveOrUnSaveBookmarkMutation();

  const onClick = () => {
    mutation(post);
  };

  return (
    <ButtonClick onClick={onClick}>
      <DropdownMenuItem className="cursor-pointer">
        {post.bookmarks?.length === 0 ? (
          <>
            <Bookmark className="mr-2 w-4 h-4" />
            <span>Save Post</span>
          </>
        ) : (
          post.bookmarks?.map((bookmark) => (
            <div key={bookmark.id} className="flex items-center">
              {post.id === bookmark.postId && (
                <>
                  <BookmarkX className="mr-2 w-4 h-4" />
                  <span>Cancel Save Post</span>
                </>
              )}
            </div>
          ))
        )}
      </DropdownMenuItem>
    </ButtonClick>
  );
};

export default ManagerBookmarks;
