import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface StoryCircleProps {
  username: string
  imageUrl: string
  viewed?: boolean
  isOwn?: boolean
}

export default function StoryCircle({ username, imageUrl, viewed = false, isOwn = false }: StoryCircleProps) {
  return (
    <Link href={`/stories/${username}`} className="flex flex-col items-center space-y-1">
      <div
        className={cn(
          "rounded-full p-[2px]",
          viewed ? "bg-gray-200 dark:bg-gray-800" : "bg-gradient-to-tr from-yellow-400 to-pink-600",
        )}
      >
        <div className="bg-white dark:bg-black rounded-full p-[2px]">
          <div className="relative h-14 w-14 rounded-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg?height=100&width=100"}
              alt={username}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <span className="text-xs truncate max-w-[64px] text-center">{isOwn ? "Your story" : username}</span>
    </Link>
  )
}

