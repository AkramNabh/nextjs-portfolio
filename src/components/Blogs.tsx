import React from 'react'
import Blog from './Blog'
import { getPost } from '@/utils/sanity-utils'
import { blog } from '@/app/types/blog'
type Props = {}

const Blogs = async (props: Props) => {

  const blogData:blog[] = await getPost();

  return (
    <section className='h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className='text-2xl uppercase tracking-[20px] text-violet-500'>blogs</h1>
        <div className='w-full flex flex-col items-start space-y-3'>
            {blogData.map((b:blog,index:number)=>(
              <Blog key={index} props={b}/>
            ))}
        </div>
        <p className='text-center text-xs text-violet-500 cursor-pointer'>See more..</p>
    </section>
  )
}

export default Blogs