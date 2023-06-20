import React from 'react'

export default function ProjectsLayout({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}
