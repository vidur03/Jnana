"use client"

import { useState } from "react"
import Header from "@/components/header"
import GenreMenu from "@/components/genre-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Video, MapPin, ChevronDown } from "lucide-react"

export default function CreatePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <Header
        title="Create new post"
        showLogo={false}
        showActions={false}
        showMenu={true}
        onMenuClick={() => setMenuOpen(true)}
      />

      <GenreMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <Tabs defaultValue="post" className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-4">
          <TabsTrigger value="post">Post</TabsTrigger>
          <TabsTrigger value="story">Story</TabsTrigger>
        </TabsList>

        <TabsContent value="post" className="mt-0 px-4">
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 mb-4 flex flex-col items-center justify-center text-center">
            <ImageIcon className="h-12 w-12 mb-4 text-gray-400" />
            <h3 className="font-semibold mb-2">Drag photos and videos here</h3>
            <Button>Select from device</Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Caption</label>
              <Textarea placeholder="Write a caption..." className="resize-none" rows={4} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input placeholder="Add location" className="pl-9" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Accessibility</label>
              <Textarea placeholder="Write alt text..." className="resize-none" rows={2} />
              <p className="text-xs text-gray-500 mt-1">
                Alt text describes your photos for people with visual impairments.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Advanced settings</label>
              <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-800">
                <span>Hide like and view counts on this post</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-800">
                <span>Turn off commenting</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>

            <Button className="w-full">Share</Button>
          </div>
        </TabsContent>

        <TabsContent value="story" className="mt-0 px-4">
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 mb-4 flex flex-col items-center justify-center text-center">
            <Video className="h-12 w-12 mb-4 text-gray-400" />
            <h3 className="font-semibold mb-2">Create a new story</h3>
            <Button>Select from device</Button>
          </div>

          <div className="space-y-4 mt-6">
            <Button className="w-full">Share to your story</Button>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

