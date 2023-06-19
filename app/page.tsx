import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-slate-800 flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-12 mb-12 text-3xl text-center text-white/90">
        Hi! I&apos;m Nathan
      </p>
      <p>

      </p>
      <Link href='./about'>Go to About page</Link>
    </main>
  )
}
