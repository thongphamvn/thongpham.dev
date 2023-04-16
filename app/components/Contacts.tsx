import Image from 'next/image'

export default function Contacts() {
  return (
    <div className=' ml-4 mt-2 flex flex-col items-center justify-center gap-2'>
      <a
        href='https://github.com/thongphamvn'
        className='flex gap-1'
        target='_blank'
      >
        <div className='bg-cyan-600 rounded-full'>
          <Image src='github.svg' width={24} height={24} alt='Github Logo' />
        </div>
        <span>@thongphamvn</span>
      </a>
      <a
        href='https://www.linkedin.com/in/thongphamvn/'
        target='_blank'
        className='flex gap-1'
      >
        <div className='bg-cyan-600 rounded-full'>
          <Image
            src='linkedin.svg'
            width={24}
            height={24}
            alt='Linkedin Logo'
          />
        </div>
        <span>@thongphamvn</span>
      </a>
    </div>
  )
}
