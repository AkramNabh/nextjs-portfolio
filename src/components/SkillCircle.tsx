import React from 'react'
import Image from 'next/image'
import { Skill } from '@/app/types/skill';
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo';
type Props = {
  props:Skill;
}

const SkillCircle = ({props}: Props) => {
  return (
    <div className={`h-20 w-20 flex justify-center items-center p-1 shadow-lg ${LightTheme.firstShadow} ${DarkTheme.firstShadow} 
    ${LightTheme.fourthBg} ${DarkTheme.fourthBg} ${LightTheme.skillHover} ${DarkTheme.skillHover} hover:scale-110 duration-300 rounded-full `}>
        <div className={`flex justify-center items-center ${LightTheme.skillBg} ${DarkTheme.skillBg} rounded-full h-full w-full`}>
            <Image src={props.image} alt='skill' width={50} height={50} className=''/>
        </div>
    </div>
  )
}

export default SkillCircle