"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, PlusSquare, Heart, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/search", icon: Search, label: "Search" },
    { href: "/create", icon: PlusSquare, label: "Create" },
    { href: "/discover", icon: Heart, label: "Discover" },
    { href: "/profile", icon: User, label: "Profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black z-50">
      <div className="max-w-md mx-auto flex justify-between items-center px-4 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center p-2",
                isActive ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400",
              )}
            >
              <item.icon className={cn("h-6 w-6", isActive ? "fill-current" : "")} />
              <span className="sr-only">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

