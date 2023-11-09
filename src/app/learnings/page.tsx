import React from 'react'
import Learning from '@/components/Learning'
import Navbar from '@/components/Navbar'
import Motion from '@/components/Motion'
import Footer from '@/components/Footer'
import { getSocials, getSubjects } from '@/utils/sanity-utils'

import { education } from '../types/education'
type Props = {}

const page = async (props: Props) => {
  const socialData = await getSocials();
  const subjectData:education[] = await getSubjects();
  return (
    <section className='w-full bg-[#F1F6F9]'>
    <Navbar props={socialData}/>
    <div className='max-w-7xl min-h-screen mx-auto p-5'>
      <Motion
      delay={1}
      direction={''}
      >
        <div className='w-full p-5 my-4 md:my-16 grid md:grid-cols-3 grid-cols-1 gap-12'>
        {subjectData.map((s:education, index:number) =>(
            <Learning key={index} props={s}/>
          ))}
        </div>
        </Motion>
    </div>
    <Footer props={socialData}/>
</section>
  )
}

export default page