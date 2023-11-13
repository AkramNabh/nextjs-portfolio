"use client"
import Motion from './Motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Social } from '@/app/types/Social'
import Hamburger from 'hamburger-react'
type Props = {
  props:Social[]
}

const Navbar = ({props}: Props) => {

    const pathname = usePathname();
    const [isOpen, setOpen] = useState(false)

  return (
    // <Hamburger toggled={isOpen} toggle={setOpen} />
    <nav className="sticky top-0 max-w-7xl mx-auto p-5 flex items-center justify-between z-20">
        <Motion
        delay={1}
        direction={'left'}
        >
        <div className='flex items-center space-x-2 '>
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
        className='md:flex items-center space-x-8 hidden'>
            { pathname !== "/projects" && <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/projects">Projects</Link>}
            { pathname !== "/learning" && <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/learnings">Learnings</Link>}
            { pathname !== "/posts" &&  <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/posts">Posts</Link>}
            { pathname !== "/" &&  <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/">Home</Link>}
        </div>
        </Motion>
        <div className='md:hidden'>
          <Motion
                  delay={1}
                  direction={'right'}
          >
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </Motion>
              <div id='burger' className={`sticky top-0 z-25 ${isOpen ? 'flex' : 'hidden'
              }`}>
                <div className='flex flex-col space-y-4'>
            { pathname !== "/projects" && <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/projects">Projects</Link>}
            { pathname !== "/learning" && <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/learnings">Learnings</Link>}
            { pathname !== "/posts" &&  <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/posts">Posts</Link>}
            { pathname !== "/" &&  <Link className='text-[#1E1B18] font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm hover:text-[#FF7F11] md:text-base' href="/">Home</Link>}
                </div>
              </div>
        </div>
    </nav>
  )
}

export default Navbar