import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ricardocr987',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow h-full bg-gray-600">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
