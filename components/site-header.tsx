"use client"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  const { scrollPosition } = useScrollPosition()

  return (
    <header
      className={cn(
        "bg-background fixed z-40 mb-[88px] w-full py-8 transition-all duration-300 ",
        scrollPosition > 80 ? "mb-[56px] py-4 shadow-lg" : ""
      )}
    >
      <MainNav items={marketingConfig.mainNav} />
    </header>
  )
}
