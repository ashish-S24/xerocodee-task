import React from 'react'
import Button from './Button'
import Image from 'next/image'

const LastSection = () => {
  return (
    <section className="relative  max-container lg:padding-container px-[23px]  flexStart flex-col lg:py-[38px] lg:h-[964px] h-[739px]">
        <div className=" w-full lg:h-[632px] h-[560px] flex justify-center blue_gradient opacity-80 rounded-[35.39px]">
            <div className="flex flex-col lg:w-[901px] items-center gap-[42px] lg:gap-[33px] relative top-[109px] mx-[12px] lg:mx-[222px]">
                <p className="text-[32px] lg:text-5xl lg:leading-[68px] text-white font-semibold text-center">Ready to Transform Your Vision into Reality? Let's Get Started!</p>
                <button className="bg-white w-fit py-[14px] px-[25px] text-[#5E5DEF] rounded-[50px]">Schedule a Call</button>
            </div>
        </div>
        <div className="absolute top-[470px] lg:top-[400px] w-screen lg:w-auto flex items-center justify-center">
            <Image className=" w-[343px] h-[196px] lg:w-auto lg:h-auto" src="/Intersect.png" alt='' width={770.53} height={409}/>
        </div>
    </section>
  )
}

export default LastSection