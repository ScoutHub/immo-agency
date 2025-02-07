import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] w-[250px] rounded-xl bg-gray-700/40" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-gray-700/40" />
        <Skeleton className="h-4 w-[250px] bg-gray-700/40" />
      </div>
    </div>
  );
}
