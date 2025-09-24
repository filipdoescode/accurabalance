/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    linkedin: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type MarketingConfig = {
  mainNav: MainNavItem[]
}
