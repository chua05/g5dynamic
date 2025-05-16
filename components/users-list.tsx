"use client"

import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

interface UsersListProps {
  users: any[]
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <Card className="hover:bg-white transition-colors bg-white/90">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>
                    {user.name.charAt(0)}
                    {user.name.split(" ")[1]?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-sm text-muted-foreground">@{user.username}</p>
                  <div className="flex items-center pt-1 text-xs text-muted-foreground">
                    <Mail className="mr-1 h-3 w-3" />
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
