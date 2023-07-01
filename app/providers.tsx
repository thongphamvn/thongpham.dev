'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      storageKey='thongpham-dev-theme'
      enableSystem={false}
      themes={['light', 'dark']}
    >
      {children}
    </ThemeProvider>
  )
}
