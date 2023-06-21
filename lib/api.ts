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
  const slugs = getPostSlugs()

  const realSlug = slugs.find((slg) => slg.includes(slug))
  if (!realSlug) {
    throw new Error('Path not found')
  }

  const fullPath = join(postsDirectory, realSlug)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const convertedContent = await markdownToHtml(content || '')
  return { ...data, slug, content: convertedContent } as PostType
}

export async function getAllPosts() {
  const slugs = getPostSlugs()
    .sort((a, b) => (a < b ? 1 : -1))
    .map((slg) => slg.replace(/^\d+-(.*?)\.[^.]*$/, '$1'))

  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  return posts
}
