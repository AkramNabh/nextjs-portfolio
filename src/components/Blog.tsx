import React from 'react'
import Motion from './Motion'
import { blog } from '@/app/types/blog'
import Link from 'next/link';
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo';

type Props = {
    props:blog;
}

const Blog = ({props}: Props) => {
  return (
    <Link href={"/posts/"+props.slug.current} className='flex justify-between items-center w-full'>
        <Motion delay={1} direction={'left'}>
        <p className={`text-[#1E1B18] dark:text-[#FFF9FB] cursor-pointer hover:text-[#FF7F11] dark:hover:text-[#D65A31] hover:scale-105 duration-300`}>
        {props.title}
        </p>
        </Motion>
        <Motion delay={1} direction={'right'}>
        <p className={`text-sm text-[#007CBE] dark:text-[#C84B31] hidden md:block`}>{props.publishedAt.toString().slice(0,10)}</p>
        </Motion>
    </Link>
  )
}

export default Blog