import { getAllPosts } from '@/lib/api'
import Link from 'next/link'

export default function Page() {
  const posts = getAllPosts()

  return (
    <div>
      <h1>My blog</h1>

      <h2>All posts:</h2>
      <ul>
        {posts.map((post) => {
          const { slug, date, title } = post
          return (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                {date} - {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
