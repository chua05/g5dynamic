"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart, Users, FileText } from "lucide-react"

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BarChart className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Dynamic Analytics Data</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Home
            </Link>
            <Link
              href="/users"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/users") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Users
            </Link>
            <Link
              href="/posts"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/posts") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Posts
            </Link>
          </nav>
        </div>
        <div className="flex items-center md:hidden">
          <Link href="/" className="mr-2 flex items-center space-x-2">
            <BarChart className="h-6 w-6 text-primary" />
          </Link>
          <span className="font-bold">JSON Placeholder</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1 md:hidden">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <BarChart className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Button>
            </Link>
            <Link href="/users">
              <Button variant="ghost" size="icon">
                <Users className="h-5 w-5" />
                <span className="sr-only">Users</span>
              </Button>
            </Link>
            <Link href="/posts">
              <Button variant="ghost" size="icon">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Posts</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
