"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Edit, ChevronDown, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import GenreMenu from "@/components/genre-menu"

export default function MessagesPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Mock data for conversations
  const conversations = [
    {
      id: 1,
      username: "user1",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for sharing!",
      time: "2m",
      unread: true,
    },
    {
      id: 2,
      username: "user2",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "See you tomorrow!",
      time: "1h",
      unread: false,
    },
    {
      id: 3,
      username: "user3",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "That's awesome!",
      time: "3h",
      unread: false,
    },
    {
      id: 4,
      username: "user4",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can you send me that photo?",
      time: "5h",
      unread: true,
    },
    {
      id: 5,
      username: "user5",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let's catch up soon!",
      time: "1d",
      unread: false,
    },
  ]

  return (
    <main>
      <div className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">username</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          <Link href="/messages/new">
            <Edit className="h-6 w-6" />
            <span className="sr-only">New message</span>
          </Link>
        </div>
      </div>

      <GenreMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Search */}
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input placeholder="Search" className="pl-9 bg-gray-100 dark:bg-gray-800 border-none" />
        </div>
      </div>

      {/* Conversations */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {conversations.map((conversation) => (
          <Link
            key={conversation.id}
            href={`/messages/${conversation.id}`}
            className="flex items-center justify-between px-4 py-3"
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={conversation.avatar} alt={conversation.username} />
                <AvatarFallback>{conversation.username[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{conversation.username}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <span className="truncate max-w-[180px]">{conversation.lastMessage}</span>
                  <span className="mx-1">·</span>
                  <span>{conversation.time}</span>
                </div>
              </div>
            </div>
            {conversation.unread && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
          </Link>
        ))}
      </div>
    </main>
  )
}

