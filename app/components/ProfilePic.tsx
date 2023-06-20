import React from 'react'
import Image from "next/image"

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image className='border-4 border-slate-600 drop-shadow-xl shadow-black rounded-full mx-auto mt-12'
        src="/images/blackshirt.png"
        width={200}
        height={200}
        alt="Nathan Dinh"
        priority={true}
      />
    </section>
  )
}
