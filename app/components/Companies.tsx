import Image from 'next/image'

export function CoderSchool() {
  return (
    <a
      href='https://www.coderschool.vn/en'
      target='_blank'
      className='bg-white rounded h-6'
    >
      <Image
        src={'/coderschool.svg'}
        width={125}
        height={20}
        alt='Nuclent'
        className='px-2 py-1'
      />
    </a>
  )
}

export function Nuclent() {
  return (
    <a
      href='https://www.nuclent.com/'
      target='_blank'
      className='bg-white rounded h-6'
    >
      <Image
        src={'/nuclent.svg'}
        width={80}
        height={20}
        alt='Nuclent'
        className='px-2'
      />
    </a>
  )
}

export function MissingCorner() {
  return (
    <a
      href='https://www.missingcorner.com/'
      target='_blank'
      className='bg-black rounded h-6 flex items-center'
    >
      <Image
        src={'/corner.svg'}
        width={95}
        height={20}
        alt='Missing Corner'
        className='px-2 py-1'
      />
    </a>
  )
}

export function Inspectorio() {
  return (
    <a
      className='bg-[#0078b7] rounded h-6'
      href='https://inspectorio.com/'
      target='_blank'
    >
      <Image
        src={'/inspectorio.png'}
        width={100}
        height={20}
        alt='Inspectorio'
        className='px-2 py-1'
      />
    </a>
  )
}

export function Tma() {
  return (
    <a
      className='bg-white rounded h-6 flex justify-center items-center'
      href='https://www.tmasolutions.com/'
      target='_blank'
    >
      <Image
        src={'/tma.png'}
        width={70}
        height={20}
        alt='Tma Solution'
        className='px-2 py-0.5'
      />
    </a>
  )
}
