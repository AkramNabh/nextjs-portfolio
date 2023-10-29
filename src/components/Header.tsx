import React from 'react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';
import Motion from './Motion';
import TypeWriter from './TypeWriter';
import CursorComp from './CursorComp';
import { getProfile } from '@/utils/sanity-utils';
import { Profile } from '@/app/types/Profile';
import { Social } from '@/app/types/Social';
type Props = {}

const Header = async (props: Props) => {
  const profileData:Profile=await getProfile();
  return (
    <section className='relative h-[calc(100vh-56px)] w-full flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center space-y-6 z-10'>
            <Motion
              delay={1}
              direction={'down'}
            >
            <div className='bg-[#FF7F11] rounded-full h-60 w-60 flex items-center justify-center shadow-lg shadow-[#1E1B18] hover:scale-105 duration-500'>
                <Image src={profileData.image} alt='personal' className='' height={200} width={200} />
            </div>
            </Motion>
            <Motion
            delay={1}
            direction={''}
            >
            <p className='font-bold text-[#1E1B18]'>
                {profileData.smallBio}
            </p>
            </Motion>
            <Motion
            delay={1}
            direction={''}
            >
          <div className='flex justify-center space-x-2 items-center'>
          <TypeWriter professions={profileData.profession} />
          <CursorComp/>
          </div>
            </Motion>
            <Motion
            delay={1}
            direction={''}
            >
            <div className='flex items-center space-x-6'>
            {profileData.socials.map((s:Social, index:number)=>(
            <SocialIcon key={index} bgColor='#007CBE' className='hover:scale-125 duration-200' style={{height:25, width:25}} url={s.url} />
            ))}
            </div>
            </Motion>
        </div>
        <div className='rounded-full absolute z-0 w-[70%] h-[30%] md:w-[20%] blur-2xl filter opacity-50 bg-gradient-to-r from-[#252422] to-[#007CBE]'/>
    </section>
  )
}

export default Header