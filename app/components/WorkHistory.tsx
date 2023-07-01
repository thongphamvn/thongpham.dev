'use client'

import { Collapse, useDisclosure } from '@chakra-ui/react'
import { RxChevronDown, RxChevronRight } from 'react-icons/rx'
import {
  CoderSchool,
  Inspectorio,
  MissingCorner,
  Nuclent,
  Tma,
} from './Companies'

const works = [
  {
    role: 'Mentor',
    time: '2022 - Present',
    company: <CoderSchool />,
    description: `Provided mentorship and guidance to aspiring web developers, helping them master the fundamentals of web development.`,
  },
  {
    role: 'Backend Developer',
    time: '2021 - Present',
    company: <Nuclent />,
    description: `Designed and implemented backend systems using NestJS, PostgreSQL, MongoDB, and microservices. Collaborated with team members to brainstorm and develop optimal solutions for complex technical challenges.`,
  },
  {
    role: 'Full-stack Developer',
    time: '2020 - 2021',
    company: <MissingCorner />,
    description: `Developed full-stack applications using a range of technologies, including ExpressJS, ReactJS, React-Native, PostgresSQL, Google Firebase, Cloud functions, and more, for multiple clients`,
  },
  {
    role: 'Full-stack Developer',
    time: '2018 - 2020',
    company: <Inspectorio />,
    description: `Developed a company product using a full-stack approach with ExpressJS, ReactJS, and PostgreSQL, catering to the needs of large enterprise clients. Worked closely with the product team to ensure that the product was aligned with the company's vision and goals.`,
  },
  {
    role: 'QA Engineer',
    time: '2016 - 2018',
    company: (
      <div className='flex gap-2'>
        <Inspectorio /> & <Tma />{' '}
      </div>
    ),
    description: `Conducted software testing and developed automation scripts to increase efficiency and accuracy in testing procedures.`,
  },
]
export default function WorkHistory() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div className='flex flex-col items-center mt-4'>
      <button className='' onClick={onToggle}>
        <div className='flex items-center text-cyan-800 font-semibold'>
          <span>My Work History</span>
          <div className='ml-2'>
            {isOpen ? <RxChevronDown /> : <RxChevronRight />}
          </div>
        </div>
      </button>
      <Collapse in={isOpen} animateOpacity>
        <ol className='relative mt-4 border-l border-cyan-600 ml-2'>
          {works.map((work, i) => (
            <li key={i} className='ml-4'>
              <div className='absolute w-3 h-3 bg-cyan-600 rounded-full mt-1.5 -left-1.5 border border-cyan-600'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400'>
                {work.time}
              </time>
              <div className='flex items-center'>
                <h3 className='text-lg font-semibold text-gray-700 dark:text-gray-300 mr-2'>
                  {work.role} at
                </h3>
                {work.company}
              </div>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify'>
                {work.description}
              </p>
            </li>
          ))}
        </ol>
      </Collapse>
    </div>
  )
}
