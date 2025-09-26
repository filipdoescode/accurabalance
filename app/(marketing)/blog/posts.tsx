import { use } from "react"

import type { Media, Post } from "@/types/payload-types"
import { BlogCard } from "@/components/blog-card"

type PostsResponse = {
  docs: Post[]
}

interface PostsProps {
  posts: Promise<PostsResponse>
}

export function Posts({ posts }: PostsProps) {
  const { docs } = use(posts)

  return (
    <>
      {docs.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt ?? ""}
          coverImage={post.coverImage as Media}
          slug={post.slug}
        />
      ))}
    </>
  )
}
