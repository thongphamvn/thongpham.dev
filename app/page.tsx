import Image from 'next/image'
import Contributions from './components/Contributions'

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
            <p className='text-justify'>
              <span className='font-semibold'>Thong Pham</span>
              {` is a highly skilled full-stack web developer based in Vietnam, with expertise in various technologies. With over 6 years of experience in the industry, Thong has collaborated with both established companies and startups and has excelled in fast-paced startup environments, where his strong problem-solving skills have been put to good use. He is always exploring new technologies and utilizing his technical expertise to create impactful software solutions.
            `}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='mt-8 text-lg font-bold mb-2 border-b-[1px] border-dark dark:border-light'>
            Employments
          </h3>
          <Contributions />
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='mt-8 text-lg font-bold mb-2 border-b-[1px] border-dark dark:border-light'>
            Side Projects
          </h3>
          <div className='w-full grid grid-cols-2 gap-2'>
            <div className='h-24 col-span-1 border border-dark dark:border-light rounded-lg flex justify-center items-center'>
              Coming soon!
            </div>
            <div className='h-24 col-span-1 border border-dark dark:border-light rounded-lg flex justify-center items-center'>
              Coming soon!
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='mt-8 text-lg font-bold mb-2 border-b-[1px] border-dark dark:border-light'>
            Contacts
          </h3>
          <div className=''>Soon!</div>
        </div>
      </div>
    </main>
  )
}
