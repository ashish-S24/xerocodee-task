import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className="relative flex items-center justify-end  lg:h-fit h-[448px] max-container lg:padding-container lg:py-5">
            <div className="absolute z-20 flex  h-full lg:w-[70%] lg:left-12 rounded-xl  lg:bg-gradient-to-r lg:from-white lg:from-[-20%]  lg:via-white  lg:to-white-50 ">
                <div className="lg:w-1/2 h-full flex flex-col justify-center ml-6 lg:ml-0">
                    <div className="relative flex flex-col  gap-5 ">
                        <label className="text-xs font-semibold lg:text-xl text-[#F3BC4C]">TECH SERVICES </label>
                        <h1 className="w-1/2 lg:w-full text-4xl text-white font-semibold lg:text-[#3D3D3D] lg:font-medium lg:leading-[80px] lg:text-6xl">TechSynergy: Innovate, Create, Elevate</h1>
                        <label className=" text-sm text-white lg:text-[#525252] font-light lg:text-xl">Unlocking Possibilities, One Code at a Time</label>
                    </div>
                    <div className='relative mt-5'>
                        <Button type="button" title='See projects' varient='btn_green' padding_varient='padding-large'/>
                    </div>
                </div>
                
            </div>
            <Image className="brightness-50 rounded-xl lg:filter-none lg:rounded-none" src="/background_img.svg" alt=""  width={1102} height={679} />
            <Image className="object-cover sm:hidden w-full h-full filter blur-[1px] brightness-50 rounded-xl lg:filter-none lg:rounded-none" src="/background_img.svg" alt=""  width={1102} height={679} />
        </section>
    )
}

export default Hero