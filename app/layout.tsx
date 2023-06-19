import { Nunito_Sans } from 'next/font/google'
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
