import { Nunito_Sans } from 'next/font/google'
import NavBar from './components/NavBar'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'thongpham.dev',
}

const font = Nunito_Sans({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={
          'dark:text-gray-300 text-gray-700 bg-light dark:bg-dark w-full ' +
          font.className
        }
      >
        <Providers>
          <NavBar />
          <main className='pt-12 max-w-xl m-auto'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
