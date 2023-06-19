import { getAllPosts, getPostBySlug } from '@/lib'
import Head from 'next/head'
import Layout from '../components/clayout'
import Container from '../components/container'
import Header from '../components/header'
import PostBody from '../components/post-body'
import PostHeader from '../components/post-header'

export default async function Post({ params: { slug } }: any) {
  const post = getPostBySlug(slug)
  console.log('post', post)

  return (
    <Layout>
      <Container>
        <Header />
        <>
          <article className='mb-32'>
            <Head>
              <title>{post.title}</title>
              <meta property='og:image' content={'post.ogImage.url'} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
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
