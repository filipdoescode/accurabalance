import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { payload } from "@/lib/payload"

export default async function BlogPage() {
  const posts = await payload.find({
    collection: "posts",
  })

  console.log("[posts]", posts)

  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        {posts.docs.length > 0 &&
          posts.docs.map((post) => (
            <article key={post.id} className="mb-10">
              <Link
                href={{
                  pathname: "/blog" + "/" + post.slug,
                }}
              >
                {post.coverImage && (
                  <Image
                    src={post.coverImage?.url}
                    width={post.coverImage?.width}
                    height={post.coverImage?.height}
                    alt={post.coverImage?.alt}
                  />
                )}

                <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
                <p>{post.excerpt}</p>
              </Link>
            </article>
          ))}
      </Suspense>
    </div>
  )
}
