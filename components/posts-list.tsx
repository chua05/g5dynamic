"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

interface PostsListProps {
  posts: any[]
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <Card className="hover:bg-white transition-colors bg-white/90">
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-medium leading-none">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.body}</p>
                <div className="flex items-center pt-1 text-xs text-muted-foreground">
                  <MessageSquare className="mr-1 h-3 w-3" />
                  <span>View comments</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
