import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Project from '@/components/Project'
import Motion from '@/components/Motion'
import { getProjects, getSocials } from '@/utils/sanity-utils'
import { project } from '../types/project'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
import ThemeButton from '@/components/ThemeButton'
type Props = {}

const Projectspage = async (props: Props) => {
  const projectData:project[]=await getProjects();

  const socialData = await getSocials();
  return (
    <section className={`w-full bg-[#F1F6F9] dark:bg-[#02040F]`}>
        <Navbar props={socialData}/>
        <ThemeButton />
        <div className='max-w-7xl min-h-screen mx-auto p-5'>
          <Motion
          delay={1}
          direction={''}
          >
            <div className='w-full p-5 my-4 md:my-16 grid md:grid-cols-3 grid-cols-1 gap-12'>
            {projectData.map((p:project, index:number) =>(
            <Project key={index} props={p}/>
          ))}
            </div>
            </Motion>
        </div>
        <Footer props={socialData}/>
    </section>
  )
}

export default Projectspage