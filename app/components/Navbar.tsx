import Link from 'next/link'
import React from 'react'
import ProfilePic from './ProfilePic'

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="flex items-center justify-between">
        <div className='flex items-center space-x-4 lg:ml-20'>
          
          <Link href="/" className='text-white/90 no-underline hover:text-white font-bold text-xl'>
            Nathan Dinh
          </Link>
        </div>
        <div className='flex items-center space-x-4 lg:mr-20 text-xl'>
          <Link href="/about" className='text-white/90 hover:text-white no-underline'>
                About
          </Link>
          <Link href="/projects" className='text-white/90 hover:text-white no-underline'>
                Projects
          </Link>
          <Link href="/contact" className='text-white/90 hover:text-white no-underline'>
                Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
