import { CHALLENGES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Challenges = () => {
   
  return (
    <section className="flexCenter max-container lg:padding-container  lg:h-[520px] h-[865px]  flex flex-col gap-11 px-4 lg:px-0">
        <div className="w-full">
            <h1 className="w-[267px] md:w-full md:text-center text-2xl leading-relaxed lg:text-[32px] font-medium">We have multidisciplinary teams to meet any <span className="bg-gradient-to-t from-[#704AF2]  to-[#3171DE] bg-clip-text text-transparent">challenge</span></h1>
        </div>
        <div className="bg-[#FFFFFF] flex items-center justify-center w-full rounded-[35px]  shadow-[rgba(0,_0,_0,_0.13)_0px_5px_14px_0px]">
            <div className="flex flex-col lg:flex-row lg:gap-[105px] gap-[17px] lg:py-[32.5px] lg:px-[66.5px] py-[34px] px-[32px]">
                <div  className="flex flex-col gap-4 lg:gap-9 items-start w-full">
                    <Image className="w-[36.5px] h-[36.5px] lg:w-[50px] lg:h-[50px]" src="/monitor.svg" width={50} height={50} alt='' />
                    <div className="flex flex-col gap-2">
                        <h1 className=" text-xl lg:text-[28px] font-medium text-[#3D3D3D] text-opacity-100">Front-end</h1>
                        <p className=" text-xs lg:text-base font-light text-[#525252] text-opacity-100 text-left leading-relaxed">Our frontend developers understand the delicate balance between aesthetics and functionality.</p>
                    </div>
                </div>
                <div  className="flex flex-col gap-4 lg:gap-9 items-start w-full lg:w-[calc(100%_+_80px)]">
                    <Image className="w-[36.5px] h-[36.5px] lg:w-[50px] lg:h-[50px]" src="/simcard.svg" width={50} height={50} alt='' />
                    <div className="flex flex-col gap-2">
                        <h1 className=" text-xl lg:text-[28px] font-medium text-[#3D3D3D] text-opacity-100">Back-end</h1>
                        <p className=" text-xs lg:text-base font-light text-[#525252] text-opacity-100 text-left leading-relaxed">Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.</p>
                    </div>
                </div>
                <div  className="flex flex-col gap-4 lg:gap-9 items-start w-full">
                    <Image className="w-[36.5px] h-[36.5px] lg:w-[50px] lg:h-[50px]" src="/driver.svg" width={50} height={50} alt='' />
                    <div className="flex flex-col gap-2">
                        <h1 className=" text-xl lg:text-[28px] font-medium text-[#3D3D3D] text-opacity-100">Data Analysts</h1>
                        <p className=" text-xs lg:text-base font-light text-[#525252] text-opacity-100 text-left leading-relaxed">Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Challenges