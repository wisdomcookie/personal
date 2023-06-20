'use client'

import firestoreWrite from '@/lib/firestoreWrite';
import React, { useState, ChangeEvent } from 'react'
import { FaRegEnvelope, FaLinkedin } from 'react-icons/fa'


export default function ContactPage() {
  const [textInput, setTextInput] = useState(' ');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = () => {
    firestoreWrite(textInput);
    console.log(textInput);
    // Reset the text input
    setTextInput('');
  }

  return (
    <section className='py-10 mx-auto max-w-3xl text-white/90'>
      <h2 className='text-4xl font-bold'>
          Contact Me
      </h2>
      <p className='mt-6 text-xl'>
          You can find me at:
      </p>
      <ul>
        <li className='mt-2'>
          <a href="mailto:nathandinht@gmail.com" target='_blank'>
            <div className='flex space-x-4'>
              <FaRegEnvelope className='text-3xl'/>
              <p className='font-light text-xl'>Email: nathandinht@gmail.com</p>
            </div>
          </a>
        </li>
        <li className='mt-2'>
          <a href="https://www.linkedin.com/in/nathan-dt/" target='_blank'>
            <div className='flex space-x-4'>
              <FaLinkedin className='text-3xl'/>
              <p className='font-light text-xl'>LinkedIn: linkedin.com/in/nathan-dt/</p>
            </div>
          </a>
        </li>
      </ul>
      <div>
        <p className='mt-6 text-xl'>
          Or just drop something in this box and I&apos;ll see it:
        </p>
        <textarea
          className="mt-2 w-full text-slate-800 h-40 p-4 resize-none border border-slate-600 rounded"
          value={textInput}
          onChange={handleInputChange}
          placeholder="Enter your text here..."
        ></textarea>
        <button
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-600 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
        Submit
        </button>
      </div>
    </section>
  )
}
