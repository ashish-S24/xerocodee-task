import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Marquee from 'react-fast-marquee'
import { COMPANY_LOGOS } from '@/constants'

const Technologies = () => {
    return (
        <section className="md:h-[80vh] max-container md:padding-container flexCenter  px-6 md:px-0 ">
            <div className="relative w-full flex justify-evenly lg:justify-normal lg:items-center flex-col lg:h-[509px] h-[547px] rounded-[35.39px] bg-[#F7F7FD] px-[17.55px] py-[17.55px] lg:p-0">
                <div className="lg:w-[665px] relative top-[17.34px] md:top-[77px] flex flex-col items-center lg:gap-5 gap-[14px]">
                    <h1 className="title md:text-[40px] text-[26px] text-center">Trusted by Leading Organizations</h1>
                    <h2 className="lg:w-[561px] text-[#525252] md:text-xl text-xs text-center">Our 4,000+ team has expertise in almost everyprogramming language.</h2>
                </div>
                <div className="lg:w-full hidden lg:flex relative top-[100px]">
                    <Marquee className=' w-full h-[170px]' loop={0} autoFill={true} direction='right'>
                        {COMPANY_LOGOS.slice(0).map((logo, index) => (
                            <div key={index} className='ml-[107px]'>
                                <img className="object-fill" src={logo.icon_large} />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className="lg:hidden flex flex-col flexCenter w-full gap-4">
                    <div className="w-full flex justify-evenly items-center">
                    {COMPANY_LOGOS.slice(0,2).map((logo, index) => (
                            <div key={index} className=''>
                                <img className="" src={logo.icon_small} />
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex justify-evenly items-center">
                    {COMPANY_LOGOS.slice(2,5).map((logo, index) => (
                            <div key={index} className=''>
                                <img className="" src={logo.icon_small} />
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex justify-evenly items-center">
                    {COMPANY_LOGOS.slice(5).map((logo, index) => (
                            <div key={index} className=''>
                                <img className="" src={logo.icon_small} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative lg:top-[100px] w-full flexCenter">
                    <Button type='button' title='Our full repertorie' varient='btn_blue' padding_varient='padding-large'></Button>
                </div>


                <Image className="absolute top-[17.34px] lg:top-[37.03px] lg:left-[44px] w-[36.23px] h-[32.25px] md:w-auto md:h-auto" src="/green_vector.svg" alt='' width={90.84} height={80.88} />
            </div>
        </section>
    )
}

export default Technologies