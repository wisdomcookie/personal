import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nathan\'s Personal Website',  
  description: 'Nathan&apos;s Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 min-h-screen font-sans">
        <Navbar/>
        <div >
          {children}
        </div>
      </body>
    </html>
  )
}
