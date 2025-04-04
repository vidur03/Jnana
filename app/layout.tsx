import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import BottomNavigation from "@/components/bottom-navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Instagram Clone",
  description: "An Instagram-like UI built with Next.js and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="max-w-md mx-auto pb-16">
            {children}
            <BottomNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'