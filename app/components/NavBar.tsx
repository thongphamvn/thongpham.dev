'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import Logo from './Logo'

// const paths = [
//   {
//     name: 'Works',
//     path: '/works',
//   },
//   {
//     name: 'Posts',
//     path: '/posts',
//   },
// ]

export default function NavBar() {
  const { theme, setTheme } = useTheme()

  return (
    <main className='w-full fixed top-0 h-12'>
      <div className='flex max-w-xl justify-between mx-auto py-2 items-center'>
        <div className='flex items-center gap-12'>
          <Link href='/'>
            <Logo />
          </Link>
          {/* {paths.map((path) => (
            <Link
              key={path.name}
              href={path.path}
              className={classNames(
                'hover:underline underline-offset-2',
                'hidden md:block',
                pathname === path.path && 'underline'
              )}
            >
              <div>{path.name}</div>
            </Link>
          ))} */}
        </div>
        <div className='flex items-center'>
          <div className='self-end mr-4'>
            {theme === 'light' ? (
              <button
                className='p-2 rounded-lg border border-[#20202380]'
                onClick={() => setTheme('dark')}
              >
                <MdOutlineDarkMode className='text-xl' />
              </button>
            ) : (
              <button
                className='p-2 rounded border border-[#f0e7db]'
                onClick={() => setTheme('light')}
              >
                <MdOutlineLightMode className='text-xl' />
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
