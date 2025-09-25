import Image from "next/image"

import { Button } from "@/components/ui/button"

import weWillHelpImg from "@/public/assets/landing/accountan4-home-pic1.webp"

const blogPosts = [
  {
    id: "1",
    title: "5 Essential Bookkeeping Tips for Small Businesses",
    description:
      "Learn the key practices every small business owner should follow to keep their books organized and error-free.",
    image: weWillHelpImg,
  },
  {
    id: "2",
    title: "How to Prepare Your Business for Tax Season",
    description:
      "A step-by-step guide to ensure your financial records are accurate and ready before filing taxes.",
    image: weWillHelpImg,
  },
  {
    id: "3",
    title: "The Benefits of Outsourcing Your Accounting",
    description:
      "Discover how outsourcing bookkeeping can save you time, reduce errors, and improve financial clarity.",
    image: weWillHelpImg,
  },
]

export function FeaturedPosts() {
  return (
    <div className="flex gap-10">
      {blogPosts.map((post) => (
        <article key={post.id} className="space-y-8">
          <Image src={post.image} alt={post.title} />
          <div className="space-y-4">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.description}</p>

            <Button>Read more</Button>
          </div>
        </article>
      ))}
    </div>
  )
}
