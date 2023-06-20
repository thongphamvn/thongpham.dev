import { getAllPosts } from '@/lib/api'
import Link from 'next/link'

export default async function Page() {
  const posts = await getAllPosts()

  return (
    <div>
      <ul>
        {posts.map((post) => {
          const { slug, title } = post
          return (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
