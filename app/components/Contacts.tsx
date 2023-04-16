import Image from 'next/image'

export default function Contacts() {
  const iconCls =
    'bg-cyan-600 h-6 w-6 flex items-center justify-center rounded-full'

  return (
    <div className='w-full ml-4 mt-2 flex flex-col items-start justify-center gap-3 sm:flex-row sm:justify-around'>
      <a
        href='https://github.com/thongphamvn'
        className='flex gap-2'
        target='_blank'
      >
        <div className={iconCls}>
          <Image src='github.svg' width={24} height={24} alt='Github Logo' />
        </div>
        <span>thongphamvn</span>
      </a>
      <a
        href='https://www.linkedin.com/in/thongphamvn/'
        target='_blank'
        className='flex gap-2'
      >
        <div className={iconCls}>
          <Image
            src='linkedin.svg'
            width={24}
            height={24}
            alt='Linkedin Logo'
          />
        </div>
        <span>thongphamvn</span>
      </a>
      <div className='flex gap-2'>
        <div className={iconCls}>
          <Image src='discord.svg' width={20} height={16} alt='Discord Logo' />
        </div>
        <span>{`thongpham#6933`}</span>
      </div>
    </div>
  )
}
