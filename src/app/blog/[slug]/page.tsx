'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
export default async function Page() {
  const [post, setPost] = useState({})
  const params = useParams()

  // const resp = await fetch(`https://api.vercel.app/blog/${params?.id}`)
  // const data = await resp.json()
  // setPost(data)

  return <h1>{JSON.stringify(post, null, 2)}</h1>
}
