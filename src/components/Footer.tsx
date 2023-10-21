import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-violet-900 w-full py-5'>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
          <Motion
          delay={1}
          direction={'left'}
          >
        <div className='flex items-center space-x-6'>
        <SocialIcon bgColor='#252422' className='hover:scale-125 duration-200' style={{height:25, width:25}} url="https://twitter.com" />
        <SocialIcon bgColor='#252422' className='hover:scale-125 duration-200' style={{height:25, width:25}} url="https://twitter.com" />
        <SocialIcon bgColor='#252422' className='hover:scale-125 duration-200' style={{height:25, width:25}} url="https://twitter.com" />
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