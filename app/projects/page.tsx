import React from 'react'
import ProjectsList from '../components/ProjectsList'
import { getSortedProjectData } from '@/lib/projectData'


export default async function Projects() {
  
  const projects = await getSortedProjectData();

  return (
    <main>
      <ProjectsList projects={projects}/>
    </main>
  )
}
