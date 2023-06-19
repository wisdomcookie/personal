import React from 'react'
import Image from "next/image"

export default function ProfilePic() {
  return (
    <>
      <Image 
        src="/images/virginia-cropped.jpg"
        width={40}
        height={40}
        alt="Nathan Dinh"
        priority={true}
      />
    </>
  )
}
