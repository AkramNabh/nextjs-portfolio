import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { blog } from '@/app/types/blog'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
type Props = {
  props:blog
}

const Post = ({props}: Props) => {
  return (
    <Link href={"/posts/"+props.slug.current} className={`flex items-center border-2 ${LightTheme.secondBorder} ${DarkTheme.secondBorder} hover:scale-105 duration-500 space-x-4 ${LightTheme.PostBg} ${DarkTheme.PostBg} rounded-lg shadow-lg ${LightTheme.postShadow} ${DarkTheme.postShadow} p-3`}>
        <div className='w-[40%]'>
            <Image src={props.MainImage} alt="blogImg" className='w-full object-cover rounded-lg' height={100} width={100}/>
        </div>
        <div className='w-[60%] flex flex-col items-start'>
            <h1 className='font-bold text-xl'>{props.title}</h1>
            <div className={`flex items-center space-x-1 ${LightTheme.normalText} ${DarkTheme.normalText} text-sm`}>
               <p>Author:</p>
               <p className='font-bold'>{props.author.name}</p>
            </div>
            <div className={`w-full flex items-center justify-between space-x-1 ${LightTheme.normalText} ${DarkTheme.normalText}`}>
               <p className='text-sm'>{props.publishedAt.toString().substring(0,10)}</p>
               <p className='font-bold text-xs'>Click to read more</p>
            </div>
            
        </div>
    </Link>
  )
}

export default Post