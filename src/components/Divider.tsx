import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
import React from 'react'

type Props = {}

const Divider = (props: Props) => {
  return (
    <div className='w-screen'>
        <div className={`${LightTheme.fourthBg} ${DarkTheme.fourthBg} w-[40%] h-[1px]`}>

        </div>
    </div>
  )
}

export default Divider