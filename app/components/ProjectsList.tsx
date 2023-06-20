'use client'

import React, { useState } from 'react'
import { getSortedProjectData } from '@/lib/projectData';
import ProjectItem from './ProjectItem';

type Props = {
  projects: ProjectEntry[]
}

export default function ProjectsList({ projects }: Props) {
  
  // Projects currently are either code or writing, only one is displayed at a time
  const [selectedProjectType, setSelectedProjectType] = useState('code');

  return (
    <section className='py-10 mx-auto max-w-3xl'>
      <h2 className='text-4xl font-bold text-white/90'>
        Projects
      </h2>
      <p className='mt-3 text-xl text-white/90'>Some stuff I&apos;ve worked on</p>
      <div className='mt-3'>
        <button 
          onClick={() => setSelectedProjectType('code')}
          className={`px-4 py-2 rounded ${
            selectedProjectType === 'code' ? 'bg-white/90 text-slate-600 transform scale-105 font-bold' : 'bg-slate-600 text-white/90'}`}
        >Code</button>
        <button 
          onClick={() => setSelectedProjectType('writing')}
          className={`px-4 py-2 rounded ${
            selectedProjectType === 'writing' ? 'bg-white/90 text-slate-600 transform scale-105 font-bold' : 'bg-slate-600 text-white/90'}`}
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
