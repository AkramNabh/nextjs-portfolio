import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { education } from '@/app/types/education'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
type Props = {
  props:education
}

const Learning = ({props}: Props) => {
  return (
    <Link href={"/learnings/"+props._id}className={`h-[150px] relative rounded-lg group cursor-pointer shadow-lg ${LightTheme.firstShadow} ${DarkTheme.firstShadow} hover:scale-105 duration-300`}>
    <Image src={props.MainImage} alt='gravafun' className='w-full h-full rounded-lg' height={150} width={200}/>
<div className={`${LightTheme.secondBg} ${DarkTheme.secondBg} absolute top-0 left-0 h-full w-full flex justify-center items-center ${LightTheme.secondText} ${DarkTheme.secondText} p-4 text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300`}>
{props.description}
</div>
</Link>
  )
}

export default Learning