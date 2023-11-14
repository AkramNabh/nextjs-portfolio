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
    <section className={`w-ful ${LightTheme.mainBg}${DarkTheme.mainBg}`}>
    <Navbar props={socialData}/>
    <ThemeButton />
    <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
        <div className='font-extrabold text-3xl'>
        <PortableText value={postData.body}/>
        </div>
        <div className='flex items-center justify-between'>
            <div className={`flex items-center space-x-2 text-sm ${LightTheme.normalText} ${DarkTheme.normalText}`}>
                <p>Author:</p>
                <p className='font-bold'>{postData.author.name}</p>
            </div>
            <div className={`flex items-center space-x-2 text-sm ${LightTheme.normalText} ${DarkTheme.normalText}`}>
                <p>created at:</p>
                <p className='font-bold'>{postData.publishedAt.toString().slice(0,10)}</p>
            </div>
        </div>
        <Image src={postData.MainImage} alt='lol' width={500} height={500} className={`w-full object-cover border-2 ${LightTheme.secondBorder} ${DarkTheme.secondBorder}`} />
        <PortableText value={postData.body}/>
        <div className={`flex items-center space-x-4 ${LightTheme.normalText} ${DarkTheme.normalText}`}>
            <h3 className=''>Tech used:</h3>
            <div className='flex items-center space-x-2 text-sm font-bold'>
            {postData.categories.map((c:Category,index:number)=>(
                <p key={index} className={`${LightTheme.techBg} ${DarkTheme.techBg} rounded-lg p-1`}>{c.title}</p> 
               ))}
            </div>
        </div>
    </div>
    <Footer props={socialData}/>
</section>
  )
}

export default page