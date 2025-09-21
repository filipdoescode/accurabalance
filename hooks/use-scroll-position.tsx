import { useEffect, useState } from "react"

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")

  useEffect(() => {
    let lastScrollTop = 0

    function handleScroll() {
      const currentScrollTop = window.scrollY

      setScrollPosition(currentScrollTop)

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }

      lastScrollTop = currentScrollTop
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollPosition, scrollDirection }
}
