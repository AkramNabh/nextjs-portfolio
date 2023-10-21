"use client";
import React, { FormEvent, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {}
type Inputs = {
    name:string,
    subject:string,
    message:string
  };
const Contact = (props: Props) => {
  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const onSubmit =async (e:FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact',{
        method:'POST',
        body:JSON.stringify({
          name,email,message
        }),
        headers:{
          'content-type': 'application/json',
        }
      })
    } catch (err:any) {
      console.error('error', err)
    }

  }

    return (
    <section className='h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24 w-full'>
        <h1 className='text-2xl uppercase tracking-[20px] text-violet-500'>Contact me</h1>
        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center space-y-3 w-full md:w-[30%]'>
            <input value={name}
          onChange={(e) => setName(e.target.value)} 
          className='placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full'
           placeholder='Your Name' type='text' />
            <input value={email}
          onChange={(e) => setEmail(e.target.value)}
           className='placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full' 
           placeholder='Your Mail' type='email' />
            <textarea    value={message}
          onChange={(e) => setMessage(e.target.value)} 
          rows={8} className='placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full' 
          placeholder='Your Message'/>
            <button type='submit' className='bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg p-3 font-bold w-full text-white hover:opacity-90'>
                Submit
            </button>
        </form>

    </section>
  )
}

export default Contact