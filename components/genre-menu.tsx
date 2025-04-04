"use client"

import { useState } from "react"
import {
  ChevronRight,
  Briefcase,
  Cpu,
  Lightbulb,
  Newspaper,
  Trophy,
  Braces,
  Rocket,
  Tractor,
  Bitcoin,
  DollarSign,
  TrendingUp,
  Building,
  PiggyBank,
  Dumbbell,
  Utensils,
  Heart,
  Plane,
  ClubIcon as Football,
  TurtleIcon as Tennis,
  GuitarIcon as Golf,
  ShoppingBasketIcon as Basketball,
} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface GenreMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function GenreMenu({ isOpen, onClose }: GenreMenuProps) {
  const [activeGenre, setActiveGenre] = useState<string | null>(null)

  const genres = [
    {
      name: "Finance",
      icon: Briefcase,
      subGenres: [
        { name: "Investing", icon: TrendingUp },
        { name: "Personal Finance", icon: PiggyBank },
        { name: "Real Estate", icon: Building },
        { name: "Stock Market", icon: DollarSign },
      ],
    },
    {
      name: "Tech",
      icon: Cpu,
      subGenres: [
        { name: "AI", icon: Braces },
        { name: "Space Tech", icon: Rocket },
        { name: "Agri Tech", icon: Tractor },
        { name: "Crypto", icon: Bitcoin },
      ],
    },
    {
      name: "Lifehacks",
      icon: Lightbulb,
      subGenres: [
        { name: "Fitness", icon: Dumbbell },
        { name: "Cooking", icon: Utensils },
        { name: "Wellness", icon: Heart },
        { name: "Travel", icon: Plane },
      ],
    },
    {
      name: "News",
      icon: Newspaper,
      subGenres: [
        { name: "World", icon: Newspaper },
        { name: "Politics", icon: Newspaper },
        { name: "Business", icon: Newspaper },
        { name: "Technology", icon: Newspaper },
      ],
    },
    {
      name: "Sports",
      icon: Trophy,
      subGenres: [
        { name: "Football", icon: Football },
        { name: "Basketball", icon: Basketball },
        { name: "Tennis", icon: Tennis },
        { name: "Golf", icon: Golf },
      ],
    },
  ]

  const handleGenreClick = (genreName: string) => {
    if (activeGenre === genreName) {
      setActiveGenre(null)
    } else {
      setActiveGenre(genreName)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Explore Categories</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-full py-2">
          {genres.map((genre) => (
            <Collapsible
              key={genre.name}
              open={activeGenre === genre.name}
              onOpenChange={() => handleGenreClick(genre.name)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="flex items-center">
                  <genre.icon className="h-5 w-5 mr-3" />
                  <span>{genre.name}</span>
                </div>
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${activeGenre === genre.name ? "rotate-90" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-12 pr-4 py-2 space-y-2">
                  {genre.subGenres.map((subGenre) => (
                    <div
                      key={subGenre.name}
                      className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                      onClick={onClose}
                    >
                      <subGenre.icon className="h-4 w-4 mr-3" />
                      <span>{subGenre.name}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

