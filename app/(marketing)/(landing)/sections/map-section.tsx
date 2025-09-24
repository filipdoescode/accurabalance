"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"

import DottedWorldMap from "@/public/assets/landing/world-map-dots.svg"

export function MapSection() {
  return (
    <div className="relative max-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center absolute top-1/3 left-1/2 -translate-x-1/2  z-10">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Get in touch with us
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          <Link href="tel:+18001234567" className="underline font-bold">
            Call us today at +1 (800) 123-4567{" "}
          </Link>
        </p>

        <div>
          <AnimateIcon animateOnHover>
            <Button className="py-6 px-20 uppercase font-bold">
              Schedule Free consultation <ArrowRight />
            </Button>
          </AnimateIcon>
        </div>
      </div>

      <Image src={DottedWorldMap} alt="World map" className="p-10" />
    </div>
  )
}
