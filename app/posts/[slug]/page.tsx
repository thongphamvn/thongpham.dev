import { getAllPosts, getPostBySlug } from '@/lib'
import PostBody from '../components/post-body'
import PostHeader from '../components/post-header'
import './atom-one-dark.css'

export default async function Post({ params: { slug } }: any) {
  const post = await getPostBySlug(slug)

  return (
    <article className='mb-32'>
      <PostHeader title={post.title} date={post.date} />
      <PostBody content={post.content} />
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { title } = await getPostBySlug(slug)
  return {
    title,
  }
}
