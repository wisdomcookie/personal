import React from 'react'
import SantaPic from '../components/SantaPic'


export default function About() {
  return (
    <main>
      <section className='py-10 mx-auto max-w-3xl text-white/90'>
        <h2 className='text-4xl font-bold'>About Me</h2>

        <ul className='mt-3 list-disc px-8 py-3 bg-slate-600 rounded font-light'>
          <li className=''>Junior Computer Science student at Lafayette College (Easton, PA; USA)</li>
          <li>Aspiring software engineer</li>
          <li>Other than coding, I  also like reading, cooking and video games</li>
          <li>I also work out, mostly to stay sane</li>
          <li>Non-CS academic interests include physics and policymaking</li>
          <li>I tried to publish a novel in 8th grade</li>
          <li>I used to know how to play guitar</li>
        </ul>
        <p className='mt-3 text-l'>
        You may want my <a href="https://drive.google.com/file/d/1-W7b4yK79Zqfu7XlBSQ_kEkXcjko3SC-/view?usp=sharing" target='_blank' className='font-bold'>Resume</a>, <a href="https://linkedin.com/in/nathan-dt" target='_blank' className='font-bold'>LinkedIn</a> or <a href="https://github.com/wisdomcookie" target='_blank' className='font-bold'>GitHub</a>.<br/>
        I don&apos;t really know what else you want to know so here are some assorted favorites:
        </p>
        <ul className='mt-3 text-l font-light space-y-1 bg-slate-600 p-4 rounded'>
          <li>
            <span className="font-bold">Food:</span> Those cheesy seafood casseroles you get at cheap chinese buffets
          </li>
          <li>
            <span className="font-bold">Sports Team:</span> Chelsea FC
          </li>
          <li>
            <span className="font-bold">Book</span>: The Martian by Andy Weir, or Best Served Cold by Joe Abercrombie
          </li>
          <li>
            <span className="font-bold">Color</span>: Blue
          </li>
          <li>
            <span className="font-bold">Movie</span>: Interstellar
          </li>
        </ul>
      
      </section>
    </main>
  )
}