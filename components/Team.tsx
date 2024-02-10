import Image from 'next/image'
import React from 'react'
import Button from './Button'

type  CardProps = {
    title:string,
    icon:string
}

const Team = () => {
    return (
        <section className="max-container padding-container flexCenter flex-col h-[925px] lg:h-fit gap-[16px] lg:gap-[57px] lg:py-[90px] lg:mt-[42px]">
            <div className="relative w-full lg:w-[1083.26px] flexCenter px-[33px]  lg:px-[78px]">
                <div className="w-full grid grid-cols-2 lg:grid-cols-5 items-center justify-center">
                    <TeamCard title='Software Developer' icon='/team/sw-dev.png'/>
                    <TeamCard title='QA Engineers' icon='/team/qa-dev.png'/>
                    <TeamCard title='UX Designers' icon='/team/ux-dev.png'/>
                    <TeamCard title='Data Scientists' icon='/team/data-scie.png'/>
                    <div className=' col-span-2 lg:col-span-1'>
                        <TeamCard title='Project Manager' icon='/team/proj-man.png'/>
                    </div>
                </div>
                <Image className="hidden lg:block absolute right-0 top-[47.48px] -z-0  -rotate-[0.65deg]" src="/blue_vector.svg" alt='' width={131} height={116.59} />
                <Image className="hidden lg:block absolute left-0 top-[92.48px] -z-0  -rotate-[0.65deg]" src="/green_vector.svg" alt='' width={131} height={116.59} />
            </div>
            <div className="w-full flexCenter">
                <label className="title text-[26px] leadin-[62px] lg:text-[40px] text-center">Let's Form Your Crew.</label>
            </div>
            <div>
                <Button type='button' title='Schedule a Call' varient='btn_blue' padding_varient='padding-small'/>
            </div>
        </section>
    )
}


const TeamCard = ({title , icon}: CardProps) => {

    const titleArr = title.split(' ');

    return (
        <div className="relative flex flex-col flexCenter">
            <div className='relative w-[180px] h-[180px] lg:w-[244px] lg:h-[244px]'>
                <img className='absolute z-20' src={icon} alt='' />
            </div>
            <div className="w-full text-center">
                <label className="font-medium text-[17.51px] leading-[23.34px] lg:leading-none lg:text-2xl text-[#3D3D3D]"> {titleArr[0]} <br /> {titleArr[1]} </label>
            </div>
        </div>
    )
}

export default Team