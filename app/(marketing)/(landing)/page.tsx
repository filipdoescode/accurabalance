import { BlogPostSection } from "@/app/(marketing)/(landing)/sections/blog-posts-section"
import { HeroSection } from "@/app/(marketing)/(landing)/sections/hero-section"
import { MapSection } from "@/app/(marketing)/(landing)/sections/map-section"
import TrustSection from "@/app/(marketing)/(landing)/sections/trust-section"
import { WhatWeOfferSection } from "@/app/(marketing)/(landing)/sections/what-we-offer-section"

export default function Home() {
  return (
    <>
      <section className="bg-primary z-1 relative">
        <HeroSection />
      </section>

      <section className="container py-32">
        <WhatWeOfferSection />
      </section>

      <section className="relative my-32 clients-bg">
        <TrustSection />
      </section>

      <section>
        <BlogPostSection />
      </section>

      <section className="container py-32">
        <MapSection />
      </section>
    </>
  )
}
