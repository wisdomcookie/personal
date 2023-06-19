'use client'

import React, { useState } from 'react'
import { getSortedProjectData } from '@/lib/project-data';
import ProjectItem from './ProjectItem';

type Props = {
  projects: ProjectEntry[]
}

export default function Projects({ projects }: Props) {
  
  const [visibleProjectType, setVisibleProjectType] = useState('code');

  return (
    <section className='mt-6 mx-auto max-w-4xl'>
      <h2 className='text-4xl font-bold text-white/90'>
        Projects
      </h2>
      <div>
        <button onClick={() => setVisibleProjectType('code')}>Code</button>
        <button onClick={() => setVisibleProjectType('writing')}>Writing</button>
      </div>
      <p className='mt-2 text-xl text-white/90'>Just some stuff I made, don&apos;t pay too much attention</p>
      <ul className='w-full'>
        {
          projects
            .filter(project => project.type === visibleProjectType)
            .map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
      </ul>
    </section>
  )
}
