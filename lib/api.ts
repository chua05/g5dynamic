// API functions to fetch data from JSONPlaceholder

export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }
  return response.json()
}

export async function fetchUser(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch user")
  }
  return response.json()
}

export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }
  return response.json()
}

export async function fetchPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch post")
  }
  return response.json()
}

export async function fetchComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments")
  if (!response.ok) {
    throw new Error("Failed to fetch comments")
  }
  return response.json()
}

export async function fetchPostComments(postId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  if (!response.ok) {
    throw new Error("Failed to fetch post comments")
  }
  return response.json()
}

export async function fetchUserPosts(userId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  if (!response.ok) {
    throw new Error("Failed to fetch user posts")
  }
  return response.json()
}
