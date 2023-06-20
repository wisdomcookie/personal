import React from 'react'
import Image from "next/image"

export default function SantaPic() {
  return (
    <section className='w-full mx-auto'>
      <Image className='border-2 border-slate-600 mx-auto mt-8'
        src="/images/santastraight.jpg"
        width={300}
        height={300}
        alt="Santa Claus"
        priority={true}
      />
    </section>
  )
}
