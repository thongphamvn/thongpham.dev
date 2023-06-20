import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { markdownToHtml } from './markdownToHtml'
import { PostType } from './types'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug: string): Promise<PostType> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const convertedContent = await markdownToHtml(content || '')

  return { ...data, slug: realSlug, content: convertedContent } as PostType
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = Promise.all(slugs.map((slug) => getPostBySlug(slug))).then(
    (res) => res.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  )
  return posts
}
