import Image from 'next/image'
import Contacts from './components/Contacts'
import SectionContainer from './components/SectionContainer'
import SideProject from './components/SideProject'
import WorkHistory from './components/WorkHistory'

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center p-4'>
      <div className='mb-8'>
        <div>
          <div className='flex mt-8 items-start flex-col gap-2 sm:block'>
            <Image
              className='flex-shrink-0 self-center sm:ml-4 sm:float-right'
              src={'/thongpham.png'}
              alt='thongpham'
              width={150}
              style={{ height: 'auto' }}
              height={100}
            />
            <p className='text-justify indent-4'>
              <span className='font-semibold'>Thong Pham</span>
              {` is a highly skilled full-stack web developer based in Vietnam, with expertise in various technologies. With over 7 years of experience in the industry, Thong has collaborated with both established companies and startups and has excelled in fast-paced startup environments, where his strong problem-solving skills have been put to good use. He is always exploring new technologies and utilizing his technical expertise to create impactful software solutions.
            `}
            </p>
          </div>
        </div>
        <WorkHistory />
        <SectionContainer label='Side projects'>
          <SideProject />
        </SectionContainer>
        <SectionContainer label='Find me'>
          <Contacts />
        </SectionContainer>
      </div>
    </main>
  )
}
