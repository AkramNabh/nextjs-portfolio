import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { getSlug, getSocials } from '@/utils/sanity-utils'
import { blog } from '@/app/types/blog'
import { PortableText } from '@portabletext/react'
import { Category } from '@/app/types/Category'
import post from '../../../../sanity/schemas/post'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
import ThemeButton from '@/components/ThemeButton'
type Props = {
    params: {slug:string}
}

const page = async ({params}: Props) => {
    const slug = params.slug;
    const socialData = await getSocials();
    const postData:blog = await getSlug(slug);
  return (
    <section className={`w-ful bg-[#F1F6F9] dark:bg-[#02040F]`}>
    <Navbar props={socialData}/>
    <ThemeButton />
    <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
        <div className='font-extrabold text-3xl'>
        <PortableText value={postData.body}/>
        </div>
        <div className='flex items-center justify-between'>
            <div className={`flex items-center space-x-2 text-sm text-[#1E1B18] dark:text-[#FFF9FB]`}>
                <p>Author:</p>
                <p className='font-bold'>{postData.author.name}</p>
            </div>
            <div className={`flex items-center space-x-2 text-sm text-[#1E1B18] dark:text-[#FFF9FB]`}>
                <p>created at:</p>
                <p className='font-bold'>{postData.publishedAt.toString().slice(0,10)}</p>
            </div>
        </div>
        <Image src={postData.MainImage} alt='lol' width={500} height={500} className={`w-full object-cover border-2 border-[#007CBE] dark:border-[#D65A31]`} />
        <PortableText value={postData.body}/>
        <div className={`flex items-center space-x-4 text-[#1E1B18] dark:text-[#FFF9FB]`}>
            <h3 className=''>Tech used:</h3>
            <div className='flex items-center space-x-2 text-sm font-bold'>
            {postData.categories.map((c:Category,index:number)=>(
                <p key={index} className={`bg-[#007bbe1a] dark:bg-[#c84a316b] rounded-lg p-1`}>{c.title}</p> 
               ))}
            </div>
        </div>
    </div>
    <Footer props={socialData}/>
</section>
  )
}

export default page