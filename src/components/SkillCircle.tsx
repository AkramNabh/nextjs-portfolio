import React from 'react'
import Image from 'next/image'
import { Skill } from '@/app/types/skill';
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo';
type Props = {
  props:Skill;
}

const SkillCircle = ({props}: Props) => {
  return (
    <div className={`h-20 w-20 flex justify-center items-center p-1 shadow-lg shadow-[#1E1B18] dark:shadow-[#EEEEEE] 
    bg-[#007CBE] dark:bg-[#D65A31] hover:bg-[#FF7F11] dark:hover:bg-[#393E46] hover:scale-110 duration-300 rounded-full `}>
        <div className={`flex justify-center items-center bg-[#F9F8F8] dark:bg-[#E5E5E5] rounded-full h-full w-full`}>
            <Image src={props.image} alt='skill' width={50} height={50} className=''  />
        </div>
    </div>
  )
}

export default SkillCircle