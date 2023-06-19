import React from 'react'

export default function ProjectsLayout({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <>
      <nav>Projects NavBar</nav>
      <main>
        {children}
      </main>
    </>
  )
}
