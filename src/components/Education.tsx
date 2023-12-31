import React from 'react'
import Motion from './Motion'
import Learning from './Learning'
import Link from 'next/link'
import { getSubject, getSubjects } from '@/utils/sanity-utils'
import { education } from '@/app/types/education'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
type Props = {}

const Education = async (props: Props) => {
    const subjectData:education[]=await getSubjects();
  return (
    <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className={`text-2xl uppercase tracking-[20px] text-[#007CBE] dark:text-[#C84B31]`}>education</h1>
        <Motion
        delay={1}
        direction={''}
        >
            <div className='hidden md:grid grid-cols-1 md:grid-cols-4 gap-8'>
            {subjectData.map((e:education, index:number) =>(
            <Learning key={index} props={e}/>
          ))} 
            </div>
        </Motion>
        <Motion
        delay={1}
        direction={''}
        >
            <div className='md:hidden grid grid-cols-1 md:grid-cols-3 gap-8 overflow-y-auto max-h-screen'>
            {subjectData.slice(4,6).map((e:education, index:number) =>(
            <Learning key={index} props={e}/>
          ))} 
            </div>
        </Motion>

        <p className={`text-center text-xs text-[#1E1B18] dark:text-[#FFF9FB] hover:text-[#FF7F11] dark:hover:text-[#D65A31] hover:scale-105 duration-300 cursor-pointer`}><Link href="/learnings">See more...</Link></p>

    </section>
  )
}

export default Education