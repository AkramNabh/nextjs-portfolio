import { education } from '@/app/types/education';
import { Skill } from '@/app/types/skill';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ThemeButton from '@/components/ThemeButton';
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo';
import { getSocials, getSubject } from '@/utils/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  params:{_id:string}
}

const page = async ({params}: Props) => {
  const socialData = await getSocials();
  const _id=params._id;
  const subjectData:education = await getSubject(_id);
 
  return (
    <section className={`w-ful bg-[#F1F6F9] dark:bg-[#02040F]`}>
        <Navbar props={socialData}/>
        <ThemeButton />
        <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
            <h1 className='font-extrabold text-3xl'>{subjectData.title}</h1>
            <div className='flex items-center justify-between'>
                <div className={`flex items-center space-x-2 text-sm text-[#1E1B18] dark:text-[#FFF9FB]`}>
                    <p>Earned on</p>
                    <p className='font-bold'>{subjectData.recievedAt}</p>
                </div>
            </div>
            <Image src={subjectData.MainImage} alt='lol' width={500} height={500} className={`w-full object-cover border-2 border-[#007CBE] dark:border-[#D65A31]`} />
            <p>
            {subjectData.description}
            </p>
            <div className={`flex items-center space-x-4 text-[#1E1B18] dark:text-[#FFF9FB]`}>
            <h3 className=''>Tech Learned</h3>
                <div className='flex items-center space-x-2 text-sm font-bold'>
                    {subjectData.tech.map((s:Skill, index:number)=>(
                        <p className='bg-[#007bbe1a] dark:bg-[#c84a316b] rounded-lg p-1' key={index}>{s.title}</p>
                    ))}
                </div>
            </div>
        </div>
        <Footer props={socialData}/>
    </section>
  )
}

export default page