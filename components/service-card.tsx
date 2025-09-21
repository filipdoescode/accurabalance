import Image, { StaticImageData } from "next/image"

import { Icons } from "./icons"

interface ServiceCardProps {
  title: string
  image: {
    src: StaticImageData
    alt: string
  }
}

export function ServiceCard({ title, image }: ServiceCardProps) {
  return (
    <div className="group relative flex rounded bg-white">
      <div className="inline-block overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          className="rounded transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex items-center  justify-center p-10">
        <h2 className="group-hover:text-primary transition-color text-lg font-bold duration-300">
          {title}
        </h2>
      </div>

      <span className="text-primary absolute bottom-3 right-3">
        <Icons.moveDownRight className="transition-transform duration-500 group-hover:scale-110" />
      </span>
    </div>
  )
}
