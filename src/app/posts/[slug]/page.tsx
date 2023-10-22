import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { getSlug, getSocials } from '@/utils/sanity-utils'
import { blog } from '@/app/types/blog'
import { PortableText } from '@portabletext/react'
import { Category } from '@/app/types/Category'
type Props = {
    params: {slug:string}
}

const page = async ({params}: Props) => {
    const slug = params.slug;
    const socialData = await getSocials();
    const postData:blog = await getSlug(slug);
  return (
    <section className='w-ful bg-[#F1F6F9]'>
    <Navbar props={socialData}/>
    <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
        <h1 className='font-extrabold text-3xl'> gravafun is fun</h1>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-violet-500'>
                <p>Author:</p>
                <p className='font-bold'>{postData.author.name}</p>
            </div>
            <div className='flex items-center space-x-2 text-sm text-violet-500'>
                <p>created at:</p>
                <p className='font-bold'>{postData.publishedAt.toString().slice(0,10)}</p>
            </div>
        </div>
        <Image src={postData.MainImage} alt='lol' width={500} height={500} className='w-full object-cover border-2 border-violet-500' />
        <PortableText value={postData.body}/>
        <div className='flex items-center space-x-4 text-violet-500'>
            <h3 className=''>Tech used:</h3>
            <div className='flex items-center space-x-2 text-sm font-bold'>
            {postData.categories.map((c:Category,index:number)=>(
                <p key={index} className='bg-violet-200 rounded-lg p-1'>{c.title}</p> 
               ))}
            </div>
        </div>
    </div>
    <Footer />
</section>
  )
}

export default page