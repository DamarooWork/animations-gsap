import Post from '@/app/ui/post'

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return (
    <ul className="flex flex-col gap-5 p-10 text-center">
      {posts.map((post: IPost) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
}
