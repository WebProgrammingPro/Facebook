import { useState } from "react";

import { PostData } from "@/lib/types";

interface isReadMoreProps {
  post: PostData;
}

const IsReadMorePage = ({ post }: isReadMoreProps) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [maxLength] = useState(100);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const displayContent =
    post.content && post.content.length > maxLength && isReadMore
      ? `${post.content.slice(0, maxLength)}...`
      : post.content;

  return (
    <p onClick={toggleReadMore} className="break-all whitespace-pre-wrap">
      {displayContent}
    </p>
  );
};

export default IsReadMorePage;
