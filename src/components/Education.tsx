import React from 'react'
import Motion from './Motion'
import Learning from './Learning'
import Link from 'next/link'
import { getSubject, getSubjects } from '@/utils/sanity-utils'
import { education } from '@/app/types/education'
type Props = {}

const Education = async (props: Props) => {
    const subjectData:education[]=await getSubjects();
  return (
    <section className='max-h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24 sm:overflow-y-auto'>
        <h1 className='text-2xl uppercase tracking-[20px] text-[#007CBE]'>education</h1>
        <Motion
        delay={1}
        direction={''}
        >
            <div className='hidden md:grid grid-cols-1 md:grid-cols-6 gap-8'>
            {subjectData.map((e:education, index:number) =>(
            <Learning key={index} props={e}/>
          ))} 
            </div>
        </Motion>
        <Motion
        delay={1}
        direction={''}
        >
            <div className='md:hidden grid grid-cols-1 md:grid-cols-3 gap-8'>
            {subjectData.map((e:education, index:number) =>(
            <Learning key={index} props={e}/>
          ))}
            </div>
        </Motion>

        <p className='text-center text-xs text-[#1E1B18] hover:text-[#FF7F11] hover:scale-105 duration-300 cursor-pointer'><Link href="/">See more...</Link></p>

    </section>
  )
}

export default Education