import { FeaturedPosts } from "@/components/featured-posts"

export function BlogPostSection() {
  return (
    <div className="space-y-10 container">
      <h2 className="text-5xl font-bold">
        Recent Bookkeeping Articles{" "}
        <span className="block text-primary">to Help You Stay Organized</span>
      </h2>

      <FeaturedPosts />
    </div>
  )
}
