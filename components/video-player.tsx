"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ThemeProvider } from "@/components/theme-provider"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle authentication
    // For now, just redirect to home
    router.push("/")
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-black flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-3">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => router.back()} className="mr-2">
              <ArrowLeft className="h-6 w-6" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="font-semibold text-xl">{isLogin ? "Login" : "Sign Up"}</h1>
          </div>
        </header>

        {/* Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">{isLogin ? "Welcome back" : "Create an account"}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {isLogin ? "Sign in to continue to your feed" : "Sign up to see photos and videos from your friends"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="fullname" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-12"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email or Username
                </label>
                <Input id="email" type="text" placeholder="Enter your email or username" className="h-12" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-12 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <Link href="/forgot-password" className="text-sm text-blue-600 dark:text-blue-400">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button type="submit" className="w-full h-12">
                {isLogin ? "Log In" : "Sign Up"}
              </Button>
            </form>

            <div className="relative flex items-center justify-center my-6">
              <Separator className="absolute w-full" />
              <span className="relative bg-white dark:bg-black px-2 text-sm text-gray-500 dark:text-gray-400">OR</span>
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full h-12 flex items-center justify-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Continue with Google
              </Button>

              <Button variant="outline" className="w-full h-12 flex items-center justify-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
                Continue with Facebook
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-blue-600 dark:text-blue-400 font-medium"
                >
                  {isLogin ? "Sign up" : "Log in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
