"use client"
import UserDetailPage from "@/components/user-detail-page"

export default function UserDetail({ params }: { params: { id: string } }) {
  return <UserDetailPage userId={params.id} />
}
