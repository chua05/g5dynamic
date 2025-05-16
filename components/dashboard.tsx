"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchUsers, fetchPosts, fetchComments } from "@/lib/api"
import DashboardCharts from "@/components/dashboard-charts"
import UsersList from "@/components/users-list"
import PostsList from "@/components/posts-list"

export default function Dashboard() {
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  })

  const isLoading = usersLoading || postsLoading || commentsLoading

  return (
    <div className="flex min-h-screen w-full flex-col bg-purple-100">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-24" />
              ) : (
                <div className="text-2xl font-bold">{users?.length || 0}</div>
              )}
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-24" />
              ) : (
                <div className="text-2xl font-bold">{posts?.length || 0}</div>
              )}
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-24" />
              ) : (
                <div className="text-2xl font-bold">{comments?.length || 0}</div>
              )}
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Comments Per Post</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-24" />
              ) : (
                <div className="text-2xl font-bold">
                  {posts && comments ? (comments.length / posts.length).toFixed(1) : 0}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-white/90">
            <CardHeader>
              <CardTitle>Data Visualization</CardTitle>
              <CardDescription>Overview of users, posts, and comments</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              {isLoading ? (
                <Skeleton className="h-[350px] w-full" />
              ) : (
                <DashboardCharts users={users || []} posts={posts || []} comments={comments || []} />
              )}
            </CardContent>
          </Card>
          <Card className="col-span-3 bg-white/90">
            <CardHeader>
              <CardTitle>Activity</CardTitle>
              <CardDescription>Recent users and posts</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="users">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="users">Users</TabsTrigger>
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                </TabsList>
                <TabsContent value="users" className="mt-4">
                  {usersLoading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  ) : (
                    <UsersList users={users?.slice(0, 5) || []} />
                  )}
                </TabsContent>
                <TabsContent value="posts" className="mt-4">
                  {postsLoading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  ) : (
                    <PostsList posts={posts?.slice(0, 5) || []} />
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
