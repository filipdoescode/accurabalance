"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MainNavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"

// import { Icons } from "@/components/icons"
// import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  // const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="container flex  justify-between gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        {/* <Icons.logo /> */}
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      {items?.length ? (
        <nav className="hidden gap-12 md:flex">
          {items?.map((item, index) => {
            const isPathActive = pathname === item.href
            return (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "hover:text-primary/80 relative flex items-center text-base font-semibold transition-colors",
                  item.disabled && "cursor-not-allowed opacity-80",
                  isPathActive && "text-[#AD1426]"
                )}
              >
                {item.title}

                {isPathActive && (
                  <span className="absolute right-1/2 top-[-33px] translate-x-1/2">
                    <Icons.chevronDown />
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      ) : null}

      {/* <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button> */}

      {/* {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )} */}
    </div>
  )
}
