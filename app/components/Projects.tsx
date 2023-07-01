import Link from 'next/link'

type ProjectType = {
  name: string
  description: string
  slug: string
}

const projects: ProjectType[] = [
  {
    name: 'Messaging Application',
    slug: 'posts/messaging-app',
    description: 'A messaging app, using ExpressJs, socket.io, ReactJs',
  },
  {
    name: 'An URL shortener',
    slug: 'posts/url-shortener-app',
    description:
      'Shorten any URL with click statistics using NestJS, ReactJS, MongoDB, and Auth0',
  },
]

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className='col-span-1 py-4 px-2 rounded-xl overflow-hidden border border-gray-400 hover:border-gray-500'>
      <h3 className='font-bold text-lg'>{project.name}</h3>
      <p className='text-md italic'>{project.description}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <div className='w-full grid grid-cols-2 gap-2 md:gap-4 mt-2'>
      {projects.map((project) => (
        <Link key={project.slug} href={project.slug}>
          <ProjectCard project={project} key={project.slug} />
        </Link>
      ))}
    </div>
  )
}
