import Image from 'next/image'

type ProjectType = {
  name: string
  image: string
  slug: string
}

const projects: ProjectType[] = [
  {
    name: 'Restaurant Booking',
    slug: 'restaurant-booking',
    image: '/restaurant.png',
  },
  {
    name: 'URL shortener',
    slug: 'url-shortener',
    image: '/url-shorten.jpeg',
  },
  {
    name: '3rd project',
    slug: '3rd-project',
    image: '/restaurant.png',
  },
]

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className='col-span-1 shadow-md rounded-md flex flex-col justify-center items-center overflow-hidden'>
      <div>
        <Image
          src={project.image}
          alt={project.name}
          width={200}
          height={150}
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <p className='p-2 font-semibold'>{project.name}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <div className='w-full grid grid-cols-2 gap-2 md:gap-4 mt-2'>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.slug} />
      ))}
    </div>
  )
}
