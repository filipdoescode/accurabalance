import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[420px] w-[380px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[380px]" />
        <Skeleton className="h-4 w-[380px]" />
        <Skeleton className="h-4 w-[380px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  )
}
