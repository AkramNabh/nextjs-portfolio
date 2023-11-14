"use client"
import Motion from './Motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Social } from '@/app/types/Social'
import Hamburger from 'hamburger-react'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
import { useTheme } from 'next-themes'
type Props = {
  props:Social[]
}

const Navbar = ({props}: Props) => {

    const pathname = usePathname();
    const [isOpen, setOpen] = useState(false);
    const { theme } = useTheme();

  return (
    // <Hamburger toggled={isOpen} toggle={setOpen} />
    <nav className="sticky top-0 max-w-7xl mx-auto p-5 flex items-center justify-between z-20">
        <Motion
        delay={1}
        direction={'left'}
        >
        <div className='flex items-center space-x-2 '>
          
            {props.map((s:Social,index:number)=>(
              //there is a problem with the social icon.
              
              <SocialIcon key={index} bgColor={`${theme === 'dark' ? DarkTheme.socialsBg : LightTheme.socialsBg}`} className='hover:scale-125 duration-200' style={{height:25, width:25}} url={s.url} />
            ))}
        </div>
        </Motion>
        <Motion
        delay={1}
        direction={'right'}
        >
        <div
        className='md:flex items-center space-x-8 hidden'>
            { pathname !== "/projects" && <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/projects">Projects</Link>}
            { pathname !== "/learning" && <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/learnings">Learnings</Link>}
            { pathname !== "/posts" &&  <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/posts">Posts</Link>}
            { pathname !== "/" &&  <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/">Home</Link>}
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
            { pathname !== "/projects" && <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/projects">Projects</Link>}
            { pathname !== "/learning" && <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/learnings">Learnings</Link>}
            { pathname !== "/posts" &&  <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/posts">Posts</Link>}
            { pathname !== "/" &&  <Link className={`${LightTheme.normalText}${DarkTheme.normalText} font-bold hover:scale-150 duration-200 uppercase tracking-wide md:tracking-widest text-sm ${LightTheme.hoverText} ${DarkTheme.hoverText} md:text-base`} href="/">Home</Link>}
                </div>
              </div>
        </div>
    </nav>
  )
}

export default Navbar