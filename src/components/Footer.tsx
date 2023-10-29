"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Social } from '@/app/types/Social'
type Props = {
  props:Social[]
}

const Footer = ({props}: Props) => {
  return (
    <footer className='bg-[#0f1c55] w-full py-4'>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
          <Motion
          delay={1}
          direction={'left'}
          >
        <div className='flex items-center space-x-6'>
        {props.map((s:Social,index:number)=>(
              <SocialIcon key={index} bgColor='#007CBE' className='hover:scale-125 duration-200' style={{height:25, width:25}} url={s.url} />
            ))}
            </div>
        </Motion>
        <Motion
        delay={1}
        direction={'right'}
        >
        <p className='text-[#F1F6F9] text-xs md:text-sm'>Made out of heart</p>
        </Motion>
        </div>
    </footer>
  )
}

export default Footer