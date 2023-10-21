import Post from '@/components/Post'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Motion from '@/components/Motion'
import { getPost, getSocials } from '@/utils/sanity-utils'
import Blog from '@/components/Blog'
import { blog } from '../types/blog'
type Props = {}

const Postspage = async (props: Props) => {
  const blogData:blog[] = await getPost();

  const socialData = await getSocials();
  return (
    <section className='w-ful bg-[#F1F6F9]'>
      <Navbar props={socialData}/>
      <div className='max-w-7xl min-h-screen mx-auto p-5'>
        <Motion
        delay={1}
        direction={''}
        >
            <div className='w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
            {blogData.map((b:blog, index:number)=>(
                <Post key={index} props={b}/>
              ))}
            </div>
            </Motion>
        </div>
      <Footer />
    </section>
  )
}

export default Postspage