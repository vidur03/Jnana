"use client"

import Link from "next/link"
import { MessageCircle, Heart, Menu, Bomb } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  title?: string
  showActions?: boolean
  showBack?: boolean
  showMenu?: boolean
  showBomb?: boolean
  onMenuClick?: () => void
  onBombClick?: () => void
}

export default function Header({
  title,
  showActions = true,
  showBack = false,
  showMenu = false,
  showBomb = false,
  onMenuClick,
  onBombClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {showMenu && (
            <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          )}
          {title && <h1 className="font-semibold text-xl">{title}</h1>}
        </div>

        <div className="flex items-center space-x-4">
          {showBomb && (
            <Button variant="ghost" size="icon" onClick={onBombClick}>
              <Bomb className="h-6 w-6" />
              <span className="sr-only">Refresh recommendations</span>
            </Button>
          )}
          {showActions && (
            <>
              <Link href="/messages">
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">Messages</span>
              </Link>
              <Link href="/activity">
                <Heart className="h-6 w-6" />
                <span className="sr-only">Activity</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

