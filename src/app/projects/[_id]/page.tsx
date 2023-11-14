import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getProject, getSocials } from '@/utils/sanity-utils'
import { project } from '@/app/types/project'
import { Skill } from '@/app/types/skill'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
type Props = {
    params:{_id:string}
}

const Projectpage = async ({params}: Props) => {
const socialData = await getSocials();
const _id=params._id;
const projectData:project = await getProject(_id);
  return (
    <section className='w-ful bg-[#F1F6F9]'>
        <Navbar props={socialData}/>
        <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
            <h1 className='font-extrabold text-3xl'> {projectData.title}</h1>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-sm text-[#1E1B18]'>
                    <p>created at:</p>
                    <p className='font-bold'>{projectData._createdAt.toString().slice(0, 10)}</p>
                </div>
                <button className={`${LightTheme.secondText} ${DarkTheme.secondText} md:font-bold ${LightTheme.fourthBg} ${DarkTheme.fourthBg} px-2 md:px-4 py-2 rounded-lg ${LightTheme.buttonHover} ${DarkTheme.buttonHover} text-sm`}>
                    <Link href={projectData.url}>Link</Link>
                </button>
            </div>
            <Image src={projectData.MainImage} alt='lol' width={500} height={500} className={`w-full object-cover border-2 ${LightTheme.secondBorder} ${DarkTheme.secondBorder}`} />
            <p>
                {projectData.description}
            </p>
            <div className={`flex items-center space-x-4 ${LightTheme.normalText} ${DarkTheme.normalText}`}>
                <h3 className=''>Tech used:</h3>
                <div className='flex items-center space-x-2 text-sm font-bold'>
                    {projectData.tech.map((s:Skill, index:number)=>(
                        <p className='bg-[#007bbe1a] rounded-lg p-1' key={index}>{s.title}</p>
                    ))}
                </div>
            </div>
        </div>
        <Footer props={socialData}/>
    </section>
  )
}

export default Projectpage