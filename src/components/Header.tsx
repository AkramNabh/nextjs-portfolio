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
import Link from 'next/link';
import ThemeButton from './ThemeButton';
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo';

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
            <div className={`bg-[#FF7F11] dark:bg-[#E5E5E5] rounded-full h-60 w-60 flex items-center justify-center shadow-lg shadow-[#1E1B18] dark:shadow-[#EEEEEE] hover:scale-105 duration-500`}>
                <Image src={profileData.image} alt='personal' className='' height={200} width={200} />
            </div>
            </Motion>
            <Motion
            delay={1}
            direction={''}
            >
            <p className={`font-bold text-[#1E1B18] dark:text-[#FFF9FB] text-center`}>
                {profileData.smallBio}
            </p>
            </Motion>
            <Motion
            delay={1}
            direction={''}
            >
            <div>
          <button className={`text-[#F1F6F9] dark:text-[#FFF9FB] md:font-bold bg-[#007CBE] dark:bg-[#D65A31] px-2 md:px-4 py-2 rounded-full hover:bg-[#007bbea9] dark:hover:bg-[#d65a3149] duration-300 text-lg`}>
                    <Link target="_blank" rel="noopener noreferrer" 
                    href='https://drive.google.com/file/d/1bgetnW3jLfjAQoKAfWKCvOCvLEU7ipbO/view?usp=drive_link'>My CV</Link>
                </button >
          </div>
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

        </div>
        <div className={`rounded-full absolute z-0 w-[70%] h-[30%] md:w-[20%] blur-2xl filter opacity-50 bg-gradient-to-r from-[#252422] to-[#007CBE] dark:from-[#252422] dark:to-[#D65A31]`}/>
    </section>
  )
}

export default Header