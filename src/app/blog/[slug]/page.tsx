'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
export default function Page() {
  const [post, setPost] = useState({})
  const params = useParams()

  return <h1>{JSON.stringify(post, null, 2)}</h1>
}
