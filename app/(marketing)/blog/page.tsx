// app/blog/page.tsx
import { Suspense } from "react"

import { payload } from "@/lib/payload"
import { PostsLoader } from "@/components/posts-loader"

import { Posts } from "./posts"

export default function BlogPage() {
  const postsPromise = payload.find({
    collection: "posts",
    depth: 1,
  })

  return (
    <div className="container">
      <ul className="flex gap-8 flex-wrap justify-between">
        <Suspense fallback={<PostsLoader />}>
          <Posts posts={postsPromise} />
        </Suspense>
      </ul>
    </div>
  )
}
