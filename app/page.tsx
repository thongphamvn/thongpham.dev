import Image from 'next/image'
import Contributions from './components/Contributions'

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center p-4'>
      <div>
        <div>
          <div className='flex mt-8 items-start flex-col-reverse sm:flex-row sm:items-center'>
            <p className=''>{`Thong Pham is a highly skilled full-stack web developer in Vietnam with over 5 years of experience. He enjoys solving real-world problems and exploring new technologies, while also sharing his knowledge and expertise to help aspiring developers succeed.`}</p>
            <Image
              className='flex-shrink-0 self-center pb-4'
              src={'/thongpham.png'}
              alt='thongpham'
              width={150}
              style={{ height: 'auto' }}
              height={100}
            />
          </div>
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='mt-8 text-lg font-bold mb-2 border-b-[1px] border-dark dark:border-light'>
            Contributions
          </h3>
          <Contributions />
        </div>
      </div>
    </main>
  )
}
