import { ArrowLeft, Phone, Video, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ConversationPage({ params }: { params: { id: string } }) {
  // Mock data for the conversation
  const conversation = {
    id: params.id,
    username: "user1",
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
    messages: [
      {
        id: 1,
        sender: "user1",
        content: "Hey, how are you?",
        time: "10:30 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "me",
        content: "I'm good! Just finished a new project. How about you?",
        time: "10:32 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "user1",
        content: "That's awesome! I'd love to see it sometime.",
        time: "10:33 AM",
        isOwn: false,
      },
      {
        id: 4,
        sender: "me",
        content: "Sure, I'll send you the link later today!",
        time: "10:35 AM",
        isOwn: true,
      },
      {
        id: 5,
        sender: "user1",
        content: "Thanks! Looking forward to it.",
        time: "10:36 AM",
        isOwn: false,
      },
    ],
  }

  return (
    <main className="flex flex-col h-screen">
      <div className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/messages">
              <ArrowLeft className="h-6 w-6" />
              <span className="sr-only">Back</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={conversation.avatar} alt={conversation.username} />
                <AvatarFallback>{conversation.username[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{conversation.username}</div>
                {conversation.online && <div className="text-xs text-gray-500 dark:text-gray-400">Active now</div>}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Call</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Video className="h-5 w-5" />
              <span className="sr-only">Video call</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Info className="h-5 w-5" />
              <span className="sr-only">Info</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {conversation.messages.map((message) => (
          <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] ${message.isOwn ? "bg-blue-500 text-white rounded-3xl rounded-br-sm" : "bg-gray-200 dark:bg-gray-800 rounded-3xl rounded-bl-sm"} px-4 py-2`}
            >
              <div>{message.content}</div>
              <div className={`text-xs ${message.isOwn ? "text-blue-100" : "text-gray-500 dark:text-gray-400"} mt-1`}>
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center space-x-2">
          <Input placeholder="Message..." className="rounded-full bg-gray-100 dark:bg-gray-800 border-none" />
          <Button className="rounded-full">Send</Button>
        </div>
      </div>
    </main>
  )
}

