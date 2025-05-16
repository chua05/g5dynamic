"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "@/lib/api"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import PostsList from "@/components/posts-list"
import { Search } from "lucide-react"

export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  const filteredPosts = posts?.filter(
    (post: any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-purple-100">
      <div className="container mx-auto py-8">
        <h1 className="mb-6 text-3xl font-bold">Posts</h1>

        <div className="relative mb-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search posts by title or content..."
            className="pl-8 bg-white/90"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        ) : filteredPosts?.length === 0 ? (
          <p className="text-center text-muted-foreground">No posts found matching your search criteria.</p>
        ) : (
          <PostsList posts={filteredPosts || []} />
        )}
      </div>
    </div>
  )
}
