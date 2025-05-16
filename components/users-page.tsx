"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "@/lib/api"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import UsersList from "@/components/users-list"
import { Search } from "lucide-react"

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  const filteredUsers = users?.filter(
    (user: any) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-purple-100">
      <div className="container mx-auto py-8">
        <h1 className="mb-6 text-3xl font-bold">Users</h1>

        <div className="relative mb-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users by name, username, or email..."
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
        ) : filteredUsers?.length === 0 ? (
          <p className="text-center text-muted-foreground">No users found matching your search criteria.</p>
        ) : (
          <UsersList users={filteredUsers || []} />
        )}
      </div>
    </div>
  )
}
