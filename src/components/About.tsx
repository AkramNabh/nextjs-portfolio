import React from 'react'
import Image from 'next/image'
import Motion from './Motion'
import { getAbout, getProfile } from '@/utils/sanity-utils'
import { PortableTextBlock } from 'sanity'
import { PortableText } from '@portabletext/react'
import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
type Props = {
    bio:PortableTextBlock,
    SecondImage:string
}

const About = async () => {
    const aboutData =await getAbout();
  return (
    <section className='max-w-7xl h-screen mx-auto p-2 flex flex-col items-center justify-center space-y-24'>
        <h1 className={`text-2xl uppercase tracking-[20px] ${LightTheme.mainText} ${DarkTheme.mainText} `}>About</h1>
        <div className='flex flex-col-reverse md:flex-row items-center md:justify-center w-full'>
            <div className='md:w-[70%] w-full'>
                <Motion
                delay={1}
                direction={'left'}
                >
                <div className={`p-4 text-center md:text-left font-semibold text-sm ${LightTheme.normalText}${DarkTheme.normalText}`}>
                    <PortableText value={aboutData.bio}/>
                </div>
                </Motion>
                <div className='w-[200px] md:w-auto'>
                <Motion
                delay={1}
                direction={'right'}
                >
                    <div className={`flex items-center justify-center shadow-lg ${LightTheme.firstShadow} ${DarkTheme.firstShadow} rounded-lg ${LightTheme.thirdBg} ${DarkTheme.thirdBg} h-[250px] p-2 w-full my-12`}>
                        <div className={`w-full h-full ${LightTheme.secondBg} ${DarkTheme.secondBg} rounded-lg hover:scale-105 duration-300`}>
                        <Image src={aboutData.SecondImage} alt='img' className='rounded-lg w-full h-full object-cover ' height={150} width={150}/>
                        </div>
                    </div>
                    </Motion>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About