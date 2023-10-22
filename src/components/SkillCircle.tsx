import React from 'react'
import Image from 'next/image'
import { Skill } from '@/app/types/skill';
type Props = {
  props:Skill;
}

const SkillCircle = ({props}: Props) => {
  return (
    <div className='h-24 w-24 flex justify-center items-center p-1 shadow-lg shadow-gray-400 bg-violet-500 hover:bg-pink-500 hover:scale-110 duration-300 rounded-full '>
        <div className='flex justify-center items-center bg-[#F1F6F9] rounded-full h-full w-full'>
            <Image src={props.image} alt='skill' width={50} height={50} className=''/>
        </div>
    </div>
  )
}

export default SkillCircle