"use client"

import { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Bookmark, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface VideoPlayerProps {
  video: {
    id: number
    username: string
    userAvatar: string
    caption: string
    songName: string
    likes: number
    comments: number
    videoUrl: string
    thumbnailUrl: string
  }
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <div className="relative h-full w-full">
      {/* Video Thumbnail (in a real app, this would be a video) */}
      <div className="absolute inset-0">
        <Image src={video.thumbnailUrl || "/placeholder.svg"} alt={video.caption} fill className="object-cover" />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex">
        <div className="flex-1">
          <Link href={`/${video.username}`} className="flex items-center gap-2 mb-2">
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarImage src={video.userAvatar} alt={video.username} />
              <AvatarFallback>{video.username[0]}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-white">{video.username}</span>
          </Link>
          <p className="text-white mb-2 line-clamp-2">{video.caption}</p>
          <div className="flex items-center text-white">
            <Music className="h-4 w-4 mr-2" />
            <span className="text-sm">{video.songName}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
            <span className="sr-only">Like</span>
          </Button>
          <span className="text-white text-xs">{liked ? video.likes + 1 : video.likes}</span>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Comment</span>
          </Button>
          <span className="text-white text-xs">{video.comments}</span>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
          >
            <Share2 className="h-6 w-6" />
            <span className="sr-only">Share</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
            onClick={() => setSaved(!saved)}
          >
            <Bookmark className={`h-6 w-6 ${saved ? "fill-white" : ""}`} />
            <span className="sr-only">Save</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

