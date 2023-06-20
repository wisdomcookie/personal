import React from 'react'

export default function AboutPage() {
  return (
    <section className='py-10 mx-auto max-w-3xl text-white/90'>
      <h2 className='text-4xl font-bold'>About Me</h2>

      <ul className='mt-3 list-disc px-4'>
        <li className=''>Junior Computer Science student at Lafayette College (Easton, PA; USA)</li>
        <li>Aspiring software engineer (making stuff is fun and debugging gives me a dopamine rush).</li>
        <li>I like reading and video games and cooking</li>
        <li>I also work out, mostly to stay sane</li>
        <li>Non-CS academic interests include physics and policymaking</li>
        <li>I tried (and failed) to publish a novel in 8th grade.</li>
        <li>I used to know how to play guitar</li>
      </ul>

      <p className='mt-4'>You may want my <a href="" className='font-bold'>Resume</a>, <a href="" className='font-bold'>LinkedIn</a> or <a href="" className='font-bold'>GitHub</a>.<br/>
        I don&apos;t really know what else you want to know so here are some assorted favorites:
      </p>
      <ul className='mt-3 space-y-1'>
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
          <span className="font-bold">Movie</span>: Interstellar. Or Stuck in Love. Or Set it Up, I like a lot of rom-coms. Picking favorites is hard,
            have a picture of the cylindrical Santa Claus my sister gave me instead:
        </li>
      </ul>
      
    </section>
  )
}
