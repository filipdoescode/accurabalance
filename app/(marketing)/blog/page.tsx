import { Suspense } from "react"

import { Media } from "@/types/payload-types"
import { payload } from "@/lib/payload"
import { BlogCard } from "@/components/blog-card"
import { PostsLoader } from "@/components/posts-loader"

export default async function BlogPage() {
  const posts = await payload.find({
    collection: "posts",
    depth: 1,
  })

  console.log("[posts]", posts)

  return (
    <div className="container">
      <ul className="flex gap-8 flex-wrap justify-around">
        <Suspense fallback={<PostsLoader />}>
          {posts.docs.length > 0 &&
            posts.docs.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                // TODO: remove as
                excerpt={post.excerpt as string}
                coverImage={post.coverImage as Media}
                slug={post.slug}
              />
            ))}
        </Suspense>
      </ul>
    </div>
  )
}
