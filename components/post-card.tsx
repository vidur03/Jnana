import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface PostCardProps {
  username: string
  userImage: string
  location?: string
  imageUrl: string
  caption: string
  likes: number
  commentCount: number
  timeAgo: string
}

export default function PostCard({
  username,
  userImage,
  location,
  imageUrl,
  caption,
  likes,
  commentCount,
  timeAgo,
}: PostCardProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src={userImage} alt={username} />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <Link href={`/${username}`} className="font-semibold text-sm">
                {username}
              </Link>
            </div>
            {location && (
              <Link href={`/explore/locations/${location}`} className="text-xs">
                {location}
              </Link>
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </div>

      <div className="relative aspect-square">
        <Image
          src={imageUrl || "/placeholder.svg?height=600&width=600"}
          alt="Post image"
          fill
          className="object-cover"
        />
      </div>

      <div className="px-4 pt-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-6 w-6" />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Send className="h-6 w-6" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-6 w-6" />
            <span className="sr-only">Save</span>
          </Button>
        </div>

        <div className="font-semibold text-sm mb-1">{likes.toLocaleString()} likes</div>

        <div className="text-sm">
          <Link href={`/${username}`} className="font-semibold mr-1">
            {username}
          </Link>
          {caption}
        </div>

        {commentCount > 0 && (
          <Link href={`/p/123/comments`} className="text-gray-500 dark:text-gray-400 text-sm">
            View all {commentCount} comments
          </Link>
        )}

        <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">{timeAgo}</div>
      </div>
    </div>
  )
}

