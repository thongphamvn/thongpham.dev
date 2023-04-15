import Image from 'next/image'

function Card() {
  return <div>Card</div>
}

export default function Contributions() {
  return (
    <div className='flex items-center justify-center flex-wrap gap-3 sm:gap-x-6 sm:justify-start'>
      <a
        href='https://www.coderschool.vn/en'
        target='_blank'
        className='bg-white rounded'
      >
        <Image
          src={'/coderschool.svg'}
          width={160}
          height={20}
          alt='Nuclent'
          className='px-2 py-1'
        />
      </a>

      <a
        href='https://www.nuclent.com/'
        target='_blank'
        className='bg-white rounded'
      >
        <Image
          src={'/nuclent.svg'}
          width={100}
          height={20}
          alt='Nuclent'
          className='px-2'
        />
      </a>

      <a
        href='https://www.missingcorner.com/'
        target='_blank'
        className='bg-black rounded'
      >
        <Image
          src={'/corner.svg'}
          width={122}
          height={20}
          alt='Missing Corner'
          className='px-2 py-1.5'
        />
      </a>

      <a
        className='bg-[#0078b7] rounded'
        href='https://inspectorio.com/'
        target='_blank'
      >
        <Image
          src={'/inspectorio.png'}
          width={121}
          height={20}
          alt='Inspectorio'
          className='px-2 py-1'
        />
      </a>

      <a
        className='bg-white rounded'
        href='https://www.tmasolutions.com/'
        target='_blank'
      >
        <Image
          src={'/tma.png'}
          width={90}
          height={20}
          alt='Tma Solution'
          className='px-2 py-0.5'
        />
      </a>
    </div>
  )
}
