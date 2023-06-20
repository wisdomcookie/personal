import formatDate from '@/lib/formatDate';
import React from 'react'
import { FaGithub, FaGoogleDrive, FaLink } from 'react-icons/fa'
type Props = {
    project: ProjectEntry
}

export default function ProjectItem({ project }: Props) {
  const { id, name, date, type, link, status, description } = project;
  const formattedDate = formatDate(date);
  let linkIcon;

  switch (type) {
  case 'code':
    linkIcon = <FaGithub/>;
    break;
  case 'writing':
    linkIcon = <FaGoogleDrive/>;
    break;
  default:
    linkIcon = <FaLink/>;
  }
  return (
    <li className="mt-5 p-4 text-white/90 bg-slate-600 rounded">
      <h6 className='mb-1 font-bold text-xl'>
        {name}
      </h6>
      <div className='mb-1 flex space-x-2'>
        <p className='font-light text-xl'>Link -&gt;</p>
        <a className='text-2xl' href={link} target='_blank'>
          {linkIcon}
        </a>
      </div>
      <p className='mb-1 font-light text-l'>
        Status: {status}
      </p>
      <section className='text-l' 
        dangerouslySetInnerHTML={{ __html:description }} />
    </li>
  )
}
