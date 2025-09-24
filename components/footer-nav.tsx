"use client";

import { marketingConfig } from "@/config/marketing";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function FooterNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {marketingConfig.mainNav.map((item, index) => {
          const isPathActive = pathname === item.href;

          return (
            <li key={item.title + index}>
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "hover:text-primary/80 relative flex items-center text-base font-semibold transition-colors",
                  item.disabled && "cursor-not-allowed opacity-80",
                  isPathActive && "text-[#AD1426]"
                )}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
