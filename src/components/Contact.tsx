"use client"

import { DarkTheme, LightTheme } from '@/utils/ThemeInfo'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}
type Inputs = {
  name:string,
  subject:string,
  message:string
}

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href=`mailto:akramnabh@gmail.com?subject=${data.subject}&body=Hey its ${data.name}, ${data.message}`
  }

  return (
    <section className='h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24 w-full'>
        <h1 className={`text-2xl uppercase tracking-[20px] ${LightTheme.mainText} ${DarkTheme.mainText}`}>contact me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center space-y-3 w-full md:w-[30%] '>
            <input {...register("name", { required: true })} className={`${LightTheme.inputPlaceHolder} ${DarkTheme.inputPlaceHolder} border-2 ${LightTheme.inputBorder} ${DarkTheme.inputBorder} focus:outline-none p-2 bg-transparent rounded-lg w-full`} placeholder='Your name' type='text'/>
            {errors.name && <span className={`${LightTheme.warningText} ${DarkTheme.warningText} text-sm`}>This field is required</span>}
            <input {...register("subject", { required: true })} className={`${LightTheme.inputPlaceHolder} ${DarkTheme.inputPlaceHolder} border-2 ${LightTheme.inputBorder} ${DarkTheme.inputBorder} focus:outline-none p-2 bg-transparent rounded-lg w-full`} placeholder='Subject' type='text'/>
            {errors.subject && <span className={`${LightTheme.warningText} ${DarkTheme.warningText} text-sm`}>This field is required</span>}
            <textarea {...register("message", { required: true })} rows={8} className={`${LightTheme.inputPlaceHolder} ${DarkTheme.inputPlaceHolder} border-2 ${LightTheme.inputBorder} ${DarkTheme.inputBorder} focus:outline-none p-2 bg-transparent rounded-lg w-full`} placeholder='Your message'/>
            {errors.message && <span className={`${LightTheme.warningText} ${DarkTheme.warningText} text-sm`}>This field is required</span>}
            <button type="submit" className={`bg-gradient-to-r ${LightTheme.gradient} ${DarkTheme.gradient} p-3 rounded-lg font-bold w-full ${LightTheme.contactBtext} ${DarkTheme.contactBtext} hover:opacity-90`}>
              Submit
            </button>
        </form>
    </section>
  )
}

export default Contact