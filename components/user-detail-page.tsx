"use client"

import { useQuery } from "@tanstack/react-query"
import { fetchUser, fetchUserPosts } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, MapPin, Phone, Globe, Briefcase } from "lucide-react"
import PostsList from "@/components/posts-list"
import UserMap from "@/components/user-map"

interface UserDetailPageProps {
  userId: string
}

export default function UserDetailPage({ userId }: UserDetailPageProps) {
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  })

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ["userPosts", userId],
    queryFn: () => fetchUserPosts(userId),
  })

  const isLoading = userLoading || postsLoading

  if (userLoading) {
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

  if (!user) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">User not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-purple-100">
      <div className="container mx-auto py-8">
        <h1 className="mb-6 text-3xl font-bold">{user.name}</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Personal and contact details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl">
                    {user.name.charAt(0)}
                    {user.name.split(" ")[1]?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">@{user.username}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.website}
                  </a>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>
                    {user.company.name} - {user.company.catchPhrase}
                  </span>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground mt-1" />
                  <span>
                    {user.address.street}, {user.address.suite}
                    <br />
                    {user.address.city}, {user.address.zipcode}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>User's address on map</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <UserMap
                lat={Number.parseFloat(user.address.geo.lat)}
                lng={Number.parseFloat(user.address.geo.lng)}
                address={`${user.address.street}, ${user.address.city}`}
              />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-white/90">
          <CardHeader>
            <CardTitle>User Posts</CardTitle>
            <CardDescription>Posts created by {user.name}</CardDescription>
          </CardHeader>
          <CardContent>
            {postsLoading ? (
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full" />
                ))}
              </div>
            ) : posts?.length === 0 ? (
              <p className="text-center text-muted-foreground">No posts found for this user.</p>
            ) : (
              <PostsList posts={posts || []} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
