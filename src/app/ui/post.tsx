import Link from 'next/link'

export default async function Post({ post }: { post: IPost }) {
  return <Link href={`/blog/${post.category}`}>{post.title}</Link>
}
