"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { fetchPost, fetchPostComments, fetchUser } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, MessageSquare, User } from "lucide-react"

interface PostDetailPageProps {
  postId: string
}

export default function PostDetailPage({ postId }: PostDetailPageProps) {
  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
  })

  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ["postComments", postId],
    queryFn: () => fetchPostComments(postId),
    enabled: !!post,
  })

  const { data: author, isLoading: authorLoading } = useQuery({
    queryKey: ["user", post?.userId],
    queryFn: () => fetchUser(post.userId.toString()),
    enabled: !!post,
  })

  const isLoading = postLoading || commentsLoading || authorLoading

  if (postLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-1/3" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-purple-100">
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <Link href="/posts">
            <Button variant="outline" size="sm" className="gap-1 bg-white/90">
              <ArrowLeft className="h-4 w-4" /> Back to Posts
            </Button>
          </Link>
        </div>

        <Card className="mb-8 bg-white/90">
          <CardHeader>
            <CardTitle className="text-2xl">{post.title}</CardTitle>
            {!authorLoading && author && (
              <CardDescription>
                <Link href={`/users/${author.id}`} className="flex items-center hover:underline">
                  <User className="mr-1 h-3 w-3" />
                  By {author.name}
                </Link>
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{post.body}</p>
          </CardContent>
        </Card>

        <div className="mb-4 flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" />
          <h2 className="text-xl font-bold">Comments ({comments?.length || 0})</h2>
        </div>

        {commentsLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        ) : comments?.length === 0 ? (
          <p className="text-center text-muted-foreground">No comments on this post yet.</p>
        ) : (
          <div className="space-y-4">
            {comments?.map((comment: any) => (
              <Card key={comment.id} className="bg-white/90">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="mt-1">
                      <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-medium">{comment.name}</h3>
                        <p className="text-sm text-muted-foreground">{comment.email}</p>
                      </div>
                      <p className="text-sm">{comment.body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
