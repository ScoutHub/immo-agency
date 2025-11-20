import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-[#162242] border border-[#2C3E50] overflow-hidden p-0">
      <Skeleton className="h-32 w-full rounded-none bg-gray-700/40" />
      <div className="flex gap-2 flex-wrap justify-center w-full px-3 mb-2">
        <Skeleton className="h-6 w-16 rounded-full bg-gray-700/40" />
        <Skeleton className="h-6 w-16 rounded-full bg-gray-700/40" />
      </div>
      <div className="flex flex-col gap-1 px-3 py-2 space-y-2">
        <Skeleton className="h-4 w-full bg-gray-700/40" />
        <Skeleton className="h-4 w-3/4 bg-gray-700/40" />
        <Skeleton className="h-4 w-full bg-gray-700/40" />
      </div>
      <div className="px-3 py-2">
        <Skeleton className="h-6 w-1/2 mx-auto bg-gray-700/40" />
      </div>
    </div>
  );
}
