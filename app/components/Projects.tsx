'use client'

import React, { useState } from 'react'
import { getSortedProjectData } from '@/lib/project-data';
import ProjectItem from './ProjectItem';

type Props = {
  projects: ProjectEntry[]
}

export default function Projects({ projects }: Props) {
  
  const [selectedProjectType, setSelectedProjectType] = useState('code');

  return (
    <section className='py-6 mx-auto max-w-4xl'>
      <h2 className='text-4xl font-bold text-white/90'>
        Projects
      </h2>
      <p className='mt-3 text-xl text-white/90'>Just some stuff I made, don&apos;t pay too much attention</p>
      <div className='mt-3'>
        <button 
          onClick={() => setSelectedProjectType('code')}
          className={`px-4 py-2 rounded ${
            selectedProjectType === 'code' ? 'bg-slate-600 text-white/90 transform scale-105 font-bold' : 'bg-white/90 text-slate-600'}`}
        >Code</button>
        <button 
          onClick={() => setSelectedProjectType('writing')}
          className={`px-4 py-2 rounded ${
            selectedProjectType === 'writing' ? 'bg-slate-600 text-white/90 transform scale-105 font-bold' : 'bg-white/90 text-slate-600'}`}
        >Writing</button>
      </div>
      <ul className='mt-5 w-full'>
        {
          projects
            .filter(project => project.type === selectedProjectType)
            .map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
      </ul>
    </section>
  )
}
