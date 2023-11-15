import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getProject, getSocials } from '@/utils/sanity-utils'
import { project } from '@/app/types/project'
import { Skill } from '@/app/types/skill'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
import ThemeButton from '@/components/ThemeButton'
type Props = {
    params:{_id:string}
}

const Projectpage = async ({params}: Props) => {
const socialData = await getSocials();
const _id=params._id;
const projectData:project = await getProject(_id);
  return (
    <section className='w-ful bg-[#F1F6F9] dark:bg-[#02040F]'>
        <Navbar props={socialData}/>
        <ThemeButton />
        <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
            <h1 className='font-extrabold text-3xl'> {projectData.title}</h1>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-sm text-[#1E1B18]'>
                    <p>created at:</p>
                    <p className='font-bold'>{projectData._createdAt.toString().slice(0, 10)}</p>
                </div>
                <button className={`${LightTheme.secondText} ${DarkTheme.secondText} md:font-bold bg-[#007CBE] dark:bg-[#D65A31] px-2 md:px-4 py-2 rounded-lg hover:bg-[#007bbea9] dark:hover:bg-[#d65a3149] text-sm`}>
                    <Link href={projectData.url}>Link</Link>
                </button>
            </div>
            <Image src={projectData.MainImage} alt='lol' width={500} height={500} className={`w-full object-cover border-2 border-[#007CBE] dark:border-[#D65A31]`} />
            <p>
                {projectData.description}
            </p>
            <div className={`flex items-center space-x-4 text-[#1E1B18] dark:text-[#FFF9FB]`}>
                <h3 className=''>Tech used:</h3>
                <div className='flex items-center space-x-2 text-sm font-bold'>
                    {projectData.tech.map((s:Skill, index:number)=>(
                        <p className='bg-[#007bbe1a] dark:bg-[#c84a316b] rounded-lg p-1' key={index}>{s.title}</p>
                    ))}
                </div>
            </div>
        </div>
        <Footer props={socialData}/>
    </section>
  )
}

export default Projectpage