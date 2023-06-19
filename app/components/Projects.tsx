import React from 'react'
import { getSortedProjectData } from '@/lib/project-data';
import ProjectItem from './ProjectItem';

export default async function Projects() {
  const projects = await getSortedProjectData();
    
  return (
    <section className='mt-6 mx-auto max-w-4xl'>
      <h2 className='text-4xl font-bold text-white/90'>
        Projects
      </h2>
      <ul className='w-full'>
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}
