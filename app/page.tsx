"use client"

import { useState } from "react"
import Header from "@/components/header"
import GenreMenu from "@/components/genre-menu"
import StoryCircle from "@/components/story-circle"
import PostCard from "@/components/post-card"

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Mock data for stories
  const stories = [
    { username: "your_story", imageUrl: "/placeholder.svg?height=100&width=100", viewed: false, isOwn: true },
    { username: "user1", imageUrl: "/placeholder.svg?height=100&width=100", viewed: false },
    { username: "user2", imageUrl: "/placeholder.svg?height=100&width=100", viewed: false },
    { username: "user3", imageUrl: "/placeholder.svg?height=100&width=100", viewed: true },
    { username: "user4", imageUrl: "/placeholder.svg?height=100&width=100", viewed: true },
    { username: "user5", imageUrl: "/placeholder.svg?height=100&width=100", viewed: false },
    { username: "user6", imageUrl: "/placeholder.svg?height=100&width=100", viewed: false },
  ]

  // Mock data for posts
  const posts = [
    {
      id: 1,
      username: "photography",
      userImage: "/placeholder.svg?height=40&width=40",
      location: "Tokyo, Japan",
      imageUrl: "/placeholder.svg?height=600&width=600",
      caption: "Cherry blossoms in full bloom 🌸 #japan #sakura",
      likes: 1542,
      commentCount: 32,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      username: "foodie",
      userImage: "/placeholder.svg?height=40&width=40",
      location: "Paris, France",
      imageUrl: "/placeholder.svg?height=600&width=600",
      caption: "Best croissants in the city! 🥐 #breakfast #paris",
      likes: 983,
      commentCount: 17,
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
      username: "traveler",
      userImage: "/placeholder.svg?height=40&width=40",
      location: "Bali, Indonesia",
      imageUrl: "/placeholder.svg?height=600&width=600",
      caption: "Paradise found ✨ #bali #travel #vacation",
      likes: 2341,
      commentCount: 45,
      timeAgo: "1 day ago",
    },
  ]

  return (
    <main>
      <Header title="Feed" showMenu={true} onMenuClick={() => setMenuOpen(true)} />

      <GenreMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Stories */}
      <div className="overflow-x-auto px-4 py-4 flex space-x-4 border-b border-gray-200 dark:border-gray-800">
        {stories.map((story) => (
          <StoryCircle
            key={story.username}
            username={story.username}
            imageUrl={story.imageUrl}
            viewed={story.viewed}
            isOwn={story.isOwn}
          />
        ))}
      </div>

      {/* Posts */}
      <div className="pb-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            username={post.username}
            userImage={post.userImage}
            location={post.location}
            imageUrl={post.imageUrl}
            caption={post.caption}
            likes={post.likes}
            commentCount={post.commentCount}
            timeAgo={post.timeAgo}
          />
        ))}
      </div>
    </main>
  )
}

