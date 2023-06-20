import Image from 'next/image'

import ProfilePic from './components/ProfilePic'


export default function Home() {
  return (
    <main className="bg-slate-800 flex min-h-screen flex-col items-center">
      <ProfilePic/>
      <p className="mt-12 text-3xl text-center text-white/90">
        Hi! I&apos;m Nathan
      </p>
      <p className='mt-6 text-2xl text-center text-white/90'>
        You may want my <a href="https://drive.google.com/file/d/1xO1_wLNlJoyNQBvnhSB7pOG9ofZNNEd6/view?usp=sharing" target='_blank' className='font-bold'>Resume</a>, <a href="https://linkedin.com/in/nathan-dt" target='_blank' className='font-bold'>LinkedIn</a> or <a href="https://github.com/wisdomcookie" target='_blank' className='font-bold'>GitHub</a>.
      </p>
    </main>
  )
}
