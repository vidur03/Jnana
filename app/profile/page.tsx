"use client"

import { useState } from "react"
import Header from "@/components/header"
import GenreMenu from "@/components/genre-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid, Bookmark, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Mock data for profile
  const profile = {
    username: "username",
    name: "Your Name",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Digital creator | Photography enthusiast | Travel lover ✈️",
    website: "website.com",
    postsCount: 42,
    followers: 1024,
    following: 512,
    highlights: [
      { id: 1, title: "Travel", cover: "/placeholder.svg?height=80&width=80" },
      { id: 2, title: "Food", cover: "/placeholder.svg?height=80&width=80" },
      { id: 3, title: "Fitness", cover: "/placeholder.svg?height=80&width=80" },
      { id: 4, title: "Work", cover: "/placeholder.svg?height=80&width=80" },
    ],
    posts: [
      { id: 1, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 2, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 3, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 4, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 5, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 6, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 7, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 8, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 9, imageUrl: "/placeholder.svg?height=300&width=300" },
    ],
    saved: [
      { id: 10, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 11, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 12, imageUrl: "/placeholder.svg?height=300&width=300" },
    ],
    tagged: [
      { id: 13, imageUrl: "/placeholder.svg?height=300&width=300" },
      { id: 14, imageUrl: "/placeholder.svg?height=300&width=300" },
    ],
  }

  return (
    <main>
      <Header title={profile.username} showLogo={false} showMenu={true} onMenuClick={() => setMenuOpen(true)} />

      <GenreMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Profile info */}
      <div className="px-4 py-4">
        <div className="flex items-start">
          <Avatar className="h-20 w-20 mr-6">
            <AvatarImage src={profile.avatar} alt={profile.username} />
            <AvatarFallback>{profile.username[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
              <Button className="flex-1">Edit profile</Button>
              <Button variant="outline" className="flex-1">
                Share profile
              </Button>
            </div>

            <div className="flex justify-between text-center">
              <div>
                <div className="font-semibold">{profile.postsCount}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Posts</div>
              </div>
              <div>
                <div className="font-semibold">{profile.followers.toLocaleString()}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Followers</div>
              </div>
              <div>
                <div className="font-semibold">{profile.following.toLocaleString()}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Following</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="font-semibold">{profile.name}</div>
          <div className="whitespace-pre-line">{profile.bio}</div>
          <Link href={`https://${profile.website}`} className="text-blue-500">
            {profile.website}
          </Link>
        </div>
      </div>

      {/* Story highlights */}
      <div className="px-4 py-2 overflow-x-auto flex space-x-4 border-b border-gray-200 dark:border-gray-800">
        {profile.highlights.map((highlight) => (
          <div key={highlight.id} className="flex flex-col items-center space-y-1">
            <div className="rounded-full border border-gray-200 dark:border-gray-800 p-[2px]">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={highlight.cover || "/placeholder.svg"}
                  alt={highlight.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-xs truncate max-w-[64px] text-center">{highlight.title}</span>
          </div>
        ))}
      </div>

      {/* Posts tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full grid grid-cols-3 h-12 rounded-none border-b border-gray-200 dark:border-gray-800">
          <TabsTrigger value="posts" className="data-[state=active]:bg-transparent">
            <Grid className="h-6 w-6" />
            <span className="sr-only">Posts</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="data-[state=active]:bg-transparent">
            <Bookmark className="h-6 w-6" />
            <span className="sr-only">Saved</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="data-[state=active]:bg-transparent">
            <Tag className="h-6 w-6" />
            <span className="sr-only">Tagged</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-0">
          <div className="grid grid-cols-3 gap-[2px]">
            {profile.posts.map((post) => (
              <Link key={post.id} href={`/p/${post.id}`} className="aspect-square relative">
                <Image src={post.imageUrl || "/placeholder.svg"} alt="Post" fill className="object-cover" />
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-0">
          <div className="grid grid-cols-3 gap-[2px]">
            {profile.saved.map((post) => (
              <Link key={post.id} href={`/p/${post.id}`} className="aspect-square relative">
                <Image src={post.imageUrl || "/placeholder.svg"} alt="Saved post" fill className="object-cover" />
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tagged" className="mt-0">
          <div className="grid grid-cols-3 gap-[2px]">
            {profile.tagged.map((post) => (
              <Link key={post.id} href={`/p/${post.id}`} className="aspect-square relative">
                <Image src={post.imageUrl || "/placeholder.svg"} alt="Tagged post" fill className="object-cover" />
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

