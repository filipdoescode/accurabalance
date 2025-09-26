import Image from "next/image"
import Link from "next/link"

import { Media } from "@/types/payload-types"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"

interface BlogCardProps {
  title: string
  excerpt: string
  coverImage: Media
  slug: string
}

export function BlogCard({ title, excerpt, coverImage, slug }: BlogCardProps) {
  return (
    <Card className="w-full max-w-sm border-none p-0 shadow-none ">
      <MagicCard
        className="p-0"
        childrenClassName="flex flex-col gap-2"
        gradientColor={"#D9D9D955"}
      >
        <div>
          <Image
            src={coverImage.sizes?.card?.url as string}
            width={coverImage.sizes?.card?.width as number}
            height={coverImage.sizes?.card?.height as number}
            alt={coverImage.alt}
            className="rounded-t-xl max-h-[200px] object-cover object-top"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-6">{excerpt}</CardDescription>
        </CardContent>
        <CardFooter className="flex-col gap-2 pb-2">
          <CardAction>
            <Link
              href={{
                pathname: "/blog" + "/" + slug,
              }}
              className={cn(buttonVariants())}
              prefetch
            >
              Read more
            </Link>
          </CardAction>
        </CardFooter>
      </MagicCard>
    </Card>
  )
}
