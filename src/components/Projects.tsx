import React from 'react'
import Image from 'next/image'
import Project from './Project'
import Motion from './Motion'
import Link from 'next/link'
import { project } from '@/app/types/project'
import { getProjects } from '@/utils/sanity-utils'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
type Props = {}

const Projects = async (props: Props) => {


  const projectData:project[]=await getProjects();

  return (
    <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className={`text-2xl uppercase tracking-[20px] text-[#007CBE] dark:text-[#C84B31]`}>Projects</h1>
        <Motion
        delay={1}
        direction={''}
        >
        <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projectData.map((p:project, index:number) =>(
            <Project key={index} props={p}/>
          ))}
        </div>
        </Motion>
        <Motion
        delay={1}
        direction={''}
        >
        <div className='md:hidden grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projectData.map((p:project, index:number) =>(
            <Project key={index} props={p}/>
          ))}
        </div>
        </Motion>
        <p className={`text-center text-xs text-[#1E1B18] dark:text-[#FFF9FB] hover:text-[#FF7F11] dark:hover:text-[#D65A31] hover:scale-105 duration-300 cursor-pointer`}><Link href="/projects">See more...</Link></p>
    </section>
  )
}

export default Projects