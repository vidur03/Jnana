import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Cpu, Lightbulb, Newspaper, Trophy } from "lucide-react"

interface InformativeCardProps {
  genre: "finance" | "tech" | "lifehacks" | "news" | "sports"
  title: string
  description: string
  imageUrl: string
  learnMoreUrl: string
}

export default function InformativeCard({ genre, title, description, imageUrl, learnMoreUrl }: InformativeCardProps) {
  // Map genres to their respective icons
  const genreIcons = {
    finance: Briefcase,
    tech: Cpu,
    lifehacks: Lightbulb,
    news: Newspaper,
    sports: Trophy,
  }

  // Map genres to their respective colors
  const genreColors = {
    finance: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    tech: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    lifehacks: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    news: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    sports: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const GenreIcon = genreIcons[genre]

  return (
    <Card className="mb-4 overflow-hidden border-none shadow-md">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
            <Badge className={`${genreColors[genre]} flex items-center gap-1 px-2 py-1`}>
              <GenreIcon className="h-3.5 w-3.5" />
              <span className="capitalize">{genre}</span>
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={learnMoreUrl} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
