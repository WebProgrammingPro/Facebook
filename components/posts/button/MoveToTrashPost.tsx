import { useMoveToTrashPostMutation } from "@/hooks/posts/useMoveToTrashPostMutation";

import { PostData } from "@/lib/types";

import { Trash2 } from "lucide-react";

import ConfirmationCard from "@/components/ConfirmationCard";

interface MoveToTrashPostProps {
  data: PostData;
}

const MoveToTrashPost = ({ data }: MoveToTrashPostProps) => {
  const { mutate: mutation } = useMoveToTrashPostMutation();

  const onClick = () => {
    mutation(data.id);
  };

  return (
    <ConfirmationCard
      title="Move To Your Bin ?"
      description="Items in your bin will be automatically deleted after 30 days. You can delete them from your bin earlier by going to activity log in your settings."
      icon={<Trash2 className="mr-2 h-4 w-4" />}
      label="Move To Bin"
      button="Delete"
      onClick={onClick}
    />
  );
};

export default MoveToTrashPost;
