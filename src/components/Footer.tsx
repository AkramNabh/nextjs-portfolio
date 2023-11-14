"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Social } from '@/app/types/Social'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
import { useTheme } from 'next-themes'
type Props = {
  props:Social[]
}

const Footer = ({props}: Props) => {
  const { theme }= useTheme();
  return (
    <footer className={`${LightTheme.footerBg} ${DarkTheme.footerBg} w-full py-4`}>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
          <Motion
          delay={1}
          direction={'left'}
          >
        <div className='flex items-center space-x-6'>
        {props.map((s:Social,index:number)=>(
              <SocialIcon key={index} bgColor={`${theme === 'dark' ? DarkTheme.socialsBg : LightTheme.socialsBg}`} className='hover:scale-125 duration-200' style={{height:25, width:25}} url={s.url} />
              ))}
            </div>
        </Motion>
        <Motion
        delay={1}
        direction={'right'}
        >
        <p className={`${LightTheme.secondText} ${DarkTheme.secondText} text-xs md:text-sm`}>All Copy-Rights Reserved ©</p>
        </Motion>
        </div>
    </footer>
  )
}

export default Footer