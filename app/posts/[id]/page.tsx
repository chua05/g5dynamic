"use client"
import PostDetailPage from "@/components/post-detail-page"

export default function PostDetail({ params }: { params: { id: string } }) {
  return <PostDetailPage postId={params.id} />
}
