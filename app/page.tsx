import Image from 'next/image'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import SectionContainer from './components/SectionContainer'
import WorkHistory from './components/WorkHistory'

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <main className='pt-8 max-w-xl m-auto flex h-full flex-col items-center justify-center p-4'>
        <div className='mb-8'>
          <div>
            <div className='flex mt-8 items-start flex-col gap-2 sm:block'>
              <Image
                className='flex-shrink-0 self-center sm:ml-4 sm:float-right rounded-full'
                src={'/thongpham.png'}
                alt='thongpham'
                width={150}
                style={{ height: 'auto' }}
                height={100}
              />
              <p className='text-justify indent-4'>
                {`
              Hi, I'm Thong Pham, a full-stack web developer based in Vietnam with 7+ years of experience. I specialize in delivering high-quality work that meets my clients' needs, and I've collaborated with a diverse range of clients, from established companies to startups.
            `}
              </p>
              <p className='text-justify indent-4'>
                {`My expertise in Node.js and React.js, among other technologies, allows me to create impactful software solutions. I'm always exploring new technologies to stay ahead of the curve and utilize my technical expertise to deliver the best results for my clients.
            `}
              </p>
            </div>
          </div>
          <WorkHistory />
          <SectionContainer label='Portfolio'>
            <Projects />
          </SectionContainer>
          <SectionContainer label='Find me'>
            <Contacts />
          </SectionContainer>
        </div>
      </main>
    </div>
  )
}
