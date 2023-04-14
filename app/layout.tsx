import './globals.css'

export const metadata = {
  title: 'Thong Pham',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-[#f0e7db]'>{children}</body>
    </html>
  )
}
