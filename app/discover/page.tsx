"use client"

import { useState } from "react"
import Header from "@/components/header"
import GenreMenu from "@/components/genre-menu"
import VideoPlayer from "@/components/video-player"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function DiscoverPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Mock data for videos
  const videos = [
    {
      id: 1,
      username: "techguru",
      userAvatar: "/placeholder.svg?height=40&width=40",
      caption: "Check out this amazing AI tool that can generate realistic images from text! #AI #tech #future",
      songName: "Tech Beats - AI Future",
      likes: 15420,
      comments: 342,
      videoUrl: "/video1.mp4",
      thumbnailUrl: "/placeholder.svg?height=800&width=450&text=AI+Demo",
    },
    {
      id: 2,
      username: "financetips",
      userAvatar: "/placeholder.svg?height=40&width=40",
      caption: "3 simple ways to save money every month without feeling the pinch! #finance #saving #money",
      songName: "Money Moves - Financial Freedom",
      likes: 8932,
      comments: 217,
      videoUrl: "/video2.mp4",
      thumbnailUrl: "/placeholder.svg?height=800&width=450&text=Finance+Tips",
    },
    {
      id: 3,
      username: "lifehacker",
      userAvatar: "/placeholder.svg?height=40&width=40",
      caption:
        "This productivity hack will change how you work forever! Try it for just one week. #productivity #lifehack",
      songName: "Productive Vibes - Work Mode",
      likes: 12453,
      comments: 531,
      videoUrl: "/video3.mp4",
      thumbnailUrl: "/placeholder.svg?height=800&width=450&text=Productivity+Hack",
    },
    {
      id: 4,
      username: "sportsfan",
      userAvatar: "/placeholder.svg?height=40&width=40",
      caption: "The most incredible buzzer beater you'll see this year! 🏀 #basketball #sports #highlight",
      songName: "Sports Anthem - Game Time",
      likes: 23541,
      comments: 892,
      videoUrl: "/video4.mp4",
      thumbnailUrl: "/placeholder.svg?height=800&width=450&text=Sports+Highlight",
    },
    {
      id: 5,
      username: "newsdaily",
      userAvatar: "/placeholder.svg?height=40&width=40",
      caption: "Breaking: Major technological breakthrough announced today that could change everything! #news #tech",
      songName: "News Beat - Breaking",
      likes: 7621,
      comments: 423,
      videoUrl: "/video5.mp4",
      thumbnailUrl: "/placeholder.svg?height=800&width=450&text=Breaking+News",
    },
  ]

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const handleRefreshVideos = () => {
    // In a real app, this would fetch new recommendations
    // For now, we'll just shuffle the current videos
    setCurrentVideoIndex(Math.floor(Math.random() * videos.length))
  }

  return (
    <main className="h-screen flex flex-col">
      <Header
        title="Discover"
        showLogo={false}
        showMenu={true}
        showBomb={true}
        onMenuClick={() => setMenuOpen(true)}
        onBombClick={handleRefreshVideos}
      />

      <GenreMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <Tabs defaultValue="for-you" className="w-full flex-1 flex flex-col">
        <TabsList className="w-full grid grid-cols-2 mb-0">
          <TabsTrigger value="for-you">For You</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>

        <TabsContent value="for-you" className="mt-0 flex-1 relative">
          <div className="absolute inset-0">
            <VideoPlayer video={videos[currentVideoIndex]} />
          </div>

          {/* Navigation controls */}
          <button
            className="absolute top-1/4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white"
            onClick={handlePrevVideo}
          >
            <ChevronUp className="h-6 w-6" />
            <span className="sr-only">Previous video</span>
          </button>

          <button
            className="absolute bottom-1/4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white"
            onClick={handleNextVideo}
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Next video</span>
          </button>
        </TabsContent>

        <TabsContent value="following" className="mt-0 flex-1 relative">
          <div className="absolute inset-0">
            <VideoPlayer video={videos[(currentVideoIndex + 2) % videos.length]} />
          </div>

          {/* Navigation controls */}
          <button
            className="absolute top-1/4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white"
            onClick={handlePrevVideo}
          >
            <ChevronUp className="h-6 w-6" />
            <span className="sr-only">Previous video</span>
          </button>

          <button
            className="absolute bottom-1/4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white"
            onClick={handleNextVideo}
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Next video</span>
          </button>
        </TabsContent>
      </Tabs>
    </main>
  )
}

