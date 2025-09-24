import Image from "next/image"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { ServiceCard } from "@/components/service-card"

import landingLogoBg from "@/public/assets/landing/accountan4-section-bg1.png"
import landing_img from "@/public/assets/landing/landing-woman.webp"

import { MarketingContent } from "../content"

export function HeroSection() {
  return (
    <>
      <Image
        src={landingLogoBg}
        alt="Landing logo background"
        className="absolute -top-20 left-1/2 z-0 -translate-x-1/2 scale-75"
        aria-hidden
      />

      <div className="container flex h-full items-center justify-between gap-10 pt-24">
        <div className="h-full">
          <h1 className="animate-in slide-in-from-top z-1 font-heading relative my-auto text-6xl font-bold text-white duration-700">
            {MarketingContent.hero.title.base} <br />
            {MarketingContent.hero.title.punchline}
          </h1>

          <Separator className="my-10 bg-rose-500" />

          <ul className="animate-in slide-in-from-left mt-24 flex gap-8 duration-700">
            {MarketingContent.hero.cards.map((card, index) => (
              <li key={index}>
                <Link href={card.href}>
                  <ServiceCard
                    title={card.title}
                    image={{
                      src: card.image,
                      alt: card.title,
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="z-1 animate-in fade-in relative grow basis-full duration-1000">
          <Image src={landing_img} alt="landing woman " />
        </div>
      </div>
    </>
  )
}
