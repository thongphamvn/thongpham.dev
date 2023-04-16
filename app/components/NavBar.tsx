'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }
  return (
    <main className='w-full fixed bg-lightOpacity dark:bg-darkOpacity top-0 h-12 z-100'>
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
                className='p-2 rounded-lg border border-dark'
                onClick={() => setTheme('dark')}
              >
                <MdOutlineDarkMode className='text-xl' />
              </button>
            ) : (
              <button
                className='p-2 rounded-lg border border-light'
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
