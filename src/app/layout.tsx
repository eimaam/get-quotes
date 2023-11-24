import type { Metadata } from 'next'
import { PT_Mono } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loader from '@/loading'

const pt_mono = PT_Mono({ weight: "400", subsets: ['latin']})

export const metadata: Metadata = {
  title: 'getQuotes',
  description: 'Built by eimaam.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Suspense fallback={<Loader />}> */}
      <body className={pt_mono.className}>{children}</body>
      {/* </Suspense> */}
    </html>
  )
}
