import React from 'react'
import SkillCircle from './SkillCircle'
import Motion from './Motion'
import { getSkill } from '@/utils/sanity-utils'
import { Skill } from '@/app/types/skill'
type Props = {}

const Skills = async (props: Props) => {

  const skillData:Skill[]=await getSkill();
  return (
    <section className='h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className='text-2xl uppercase tracking-[20px] text-[#007CBE]'>Skills</h1>
        <Motion
        delay={1}
        direction={''}
        >
        <div className='sm:hidden grid grid-cols-6 gap-8'>
            {skillData.map((s:Skill,index:number)=>(
              <SkillCircle key={index} props={s}/>
            ))}  
        </div>
        <div className='sm:grid sm:grid-cols-5 sm:gap-8 hidden'>
        {skillData.map((s:Skill,index:number)=>(
              <SkillCircle key={index} props={s}/>
            ))}             
        </div>
        </Motion>
    </section>
  )
}

export default Skills