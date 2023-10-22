import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { project } from '@/app/types/project'
type Props = {
  props:project

}

const Project = ({props}: Props) => {
  return (
    <Link href={"/projects/"+props._id}className='h-[200px] relative rounded-lg group cursor-pointer shadow-lg shadow-[#1E1B18] hover:scale-105 duration-300'>
    <Image src={props.MainImage} alt='gravafun' className='w-full h-full rounded-lg' height={150} width={200}/>
<div className='bg-[#FF7F11] absolute top-0 left-0 h-full w-full flex justify-center items-center text-[#F9F8F8] p-4 text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300'>
{props.description}
</div>
</Link>
  )
}

export default Project