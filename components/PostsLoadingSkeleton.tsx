import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function PostsLoadingSkeleton() {
  return <PostLoadingSkeleton />;
}

function PostLoadingSkeleton() {
  return (
    <Card className="space-y-2 p-3">
      <div className="flex flex-wrap gap-2">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-4 w-20 rounded" />
        </div>
      </div>
      <Skeleton className="h-16 rounded" />
    </Card>
  );
}
