import { cn } from "@/lib/utils";

import { MessageTypes } from "@/lib/types";

import { Check, CircleAlert } from "lucide-react";

const Message = ({ error, success }: MessageTypes) => {
  if (!error && !success) return null;

  return (
    <div
      className={cn(
        "p-3 rounded-md flex items-center gap-x-2 text-sm",
        error
          ? "bg-destructive/15 text-destructive"
          : "bg-emerald-500/15 text-emerald-500"
      )}
    >
      {error ? (
        <CircleAlert className="w-5 h-5" />
      ) : (
        <Check className="w-5 h-5" />
      )}
      <p>{error || success}</p>
    </div>
  );
};

export default Message;
