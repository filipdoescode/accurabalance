import { notFound } from "next/navigation"
import { RichText } from "@payloadcms/richtext-lexical/react"

import { payload } from "@/lib/payload"

export async function generateStaticParams() {
  const posts = await payload.find({
    collection: "posts",
    limit: 100,
    depth: 1,
  })

  return posts.docs.map((post) => ({ slug: post.slug }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const data = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
    },
    limit: 1,
    depth: 1,
  })

  if (data.totalDocs === 0) {
    return notFound()
  }

  console.log("[data]", data)

  return (
    <div className="container pt-10 pb-32 space-y-10">
      <h1 className="text-4xl font-bold mb-4">{data.docs[0].title}</h1>

      <RichText data={data.docs[0].content} />
    </div>
  )
}
