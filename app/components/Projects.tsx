import Link from 'next/link'

type ProjectType = {
  name: string
  description: string
  slug: string
}

const projects: ProjectType[] = [
  {
    name: 'Messaging Application (In-progress)',
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
    <div className='p-2 rounded-xl overflow-hidden border hover:border-gray-400'>
      <h3 className='font-bold text-md'>{project.name}</h3>
      <p className='text-sm italic'>{project.description}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <div className='w-full mt-2'>
      {projects.map((project) => (
        <Link key={project.slug} href={project.slug}>
          <ProjectCard project={project} key={project.slug} />
        </Link>
      ))}
    </div>
  )
}
