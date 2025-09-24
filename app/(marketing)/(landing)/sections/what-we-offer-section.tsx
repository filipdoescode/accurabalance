import Image from "next/image"

import { MarketingContent } from "@/app/(marketing)/(landing)/content"

import weWillHelpImg from "@/public/assets/landing/accountan4-home-pic1.webp"

export function WhatWeOfferSection() {
  return (
    <div>
      <div className="space-y-10">
        <h2 className="text-5xl font-bold">
          {MarketingContent.whatWeOffer.title.base} <br />{" "}
          <span className="text-primary">
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
      <div className="container grid grid-cols-2 gap-32 py-32">
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
      </div>
    </div>
  )
}
