import { SkeletonCard } from "@/components/skeleton-card"

export function PostsLoader() {
  return Array.from({ length: 6 }).map((_, index) => (
    <li key={index + Math.random()}>
      <SkeletonCard />
    </li>
  ))
}
