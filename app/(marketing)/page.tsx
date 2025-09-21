import Image from "next/image"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { ServiceCard } from "@/components/service-card"

import { MarketingContent } from "@/app/(marketing)/content"

import weWillHelpImg from "@/public/assets/landing/accountan4-home-pic1.webp"
import landingLogoBg from "@/public/assets/landing/accountan4-section-bg1.png"
import landing_img from "@/public/assets/landing/landing-woman.webp"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary z-1 relative">
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
      </section>

      {/* What we offer */}
      <section className="container py-28">
        <div className="space-y-10">
          <h2 className="text-5xl font-bold">
            {MarketingContent.whatWeOffer.title.base} <br />{" "}
            <span className="text-primary">
              {" "}
              {MarketingContent.whatWeOffer.title.punchline}
            </span>
          </h2>

          <ul className="flex justify-between gap-20">
            {MarketingContent.whatWeOffer.list.map(
              ({ title, description, Icon }, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-8 rounded p-10 transition-colors hover:bg-slate-100"
                >
                  <span>
                    <Icon className="size-12" />
                  </span>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-lg">{description.substring(0, 120)}...</p>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* We will help section */}
      <section className="container grid grid-cols-2 gap-32">
        <div>
          <Image
            src={weWillHelpImg}
            alt="Two Bookkeepers working on a project, one of them looking straight at the camera"
          />
        </div>

        <div>
          <h3 className="font-heading text-4xl font-bold">
            {MarketingContent.weWillHelp.title.base}{" "}
            <span className="text-primary">
              {MarketingContent.weWillHelp.title.punchline}
            </span>
          </h3>

          <p>{MarketingContent.weWillHelp.description}</p>
        </div>
      </section>
    </>
  )
}
