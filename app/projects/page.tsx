import React from 'react'
import Projects from '../components/Projects'
import { getSortedProjectData } from '@/lib/project-data'


export default async function page() {
  
  const projects = await getSortedProjectData();

  return (
    <main>
      <Projects projects={projects}/>
    </main>
  )
}
