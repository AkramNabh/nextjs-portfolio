"use client"
import Motion from './Motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Social } from '@/app/types/Social'
type Props = {
  props:Social[]
}

const Navbar = ({props}: Props) => {

    const pathname = usePathname();
    

  return (
    <nav className="sticky top-0 max-w-7xl mx-auto p-5 flex items-center justify-between z-20">
        <Motion
        delay={1}
        direction={'left'}
        >
        <div className='flex items-center space-x-6 '>
            {props.map((s:Social,index:number)=>(
              <SocialIcon key={index} bgColor='#007CBE' className='hover:scale-125 duration-200' style={{height:25, width:25}} url={s.url} />
            ))}
        </div>
        </Motion>
        <Motion
        delay={1}
        direction={'right'}
        >
        <div 
        className='flex items-center space-x-4 md:space-x-8'>
            { pathname !== "/projects" && <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/projects">Projects</Link>}
            { pathname !== "/posts" &&  <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/posts">Posts</Link>}
            { pathname !== "/" &&  <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/">Home</Link>}
        </div>
        </Motion>
    </nav>
  )
}

export default Navbar