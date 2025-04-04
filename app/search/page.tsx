"use client"

import { useState } from "react"
import { SearchIcon, Scan } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import GenreMenu from "@/components/genre-menu"

export default function SearchPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Mock data for search categories
  const categories = ["Top", "Accounts", "Audio", "Tags", "Places"]

  // Mock data for search results
  const searchResults = [
    { id: 1, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 2, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 3, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 4, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 5, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 6, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 7, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 8, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 9, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 10, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 11, imageUrl: "/placeholder.svg?height=300&width=300" },
    { id: 12, imageUrl: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <main>
      <Header showActions={false} showMenu={true} onMenuClick={() => setMenuOpen(true)} />

      <GenreMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input placeholder="Search" className="pl-9 bg-gray-100 dark:bg-gray-800 border-none" />
          </div>
          <Scan className="h-6 w-6" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 px-4 py-2 overflow-x-auto border-b border-gray-200 dark:border-gray-800">
        {categories.map((category) => (
          <div key={category} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm whitespace-nowrap">
            {category}
          </div>
        ))}
      </div>

      {/* Search results grid */}
      <div className="grid grid-cols-3 gap-[2px]">
        {searchResults.map((result) => (
          <Link key={result.id} href={`/p/${result.id}`} className="aspect-square relative">
            <Image
              src={result.imageUrl || "/placeholder.svg?height=300&width=300"}
              alt="Search result"
              fill
              className="object-cover"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}

