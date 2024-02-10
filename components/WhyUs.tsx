"use client"
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { REASONS } from '@/constants'

const WhyUs = () => {

    {/* ------------------------- Card Carousel logic ------------------------ */ }

    const [scrollPosition, setScrollPosition] = useState(0);
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        if (cardContainerRef.current) {
            const totalWidth = cardContainerRef.current.scrollWidth;
            const numCards = cardContainerRef.current.children.length;
            const averageCardWidth = totalWidth / numCards;
            setCardWidth(averageCardWidth - 900);
        }
    }, []);

    const scrollCards = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setScrollPosition((prevPosition) => Math.max(prevPosition - cardWidth, 0));
        } else {
            if (cardContainerRef.current) {
                const maxScroll = cardContainerRef.current.scrollWidth - cardContainerRef.current.clientWidth;
                setScrollPosition((prevPosition) => Math.min(prevPosition + cardWidth, maxScroll));
            }
        }
    };

    return (
        <section className=" mt-[65.59px] max-container md:padding-container flexCenter  px-6 md:px-0 ">
            <div className="relative w-full flex lg:items-center flexCenter flex-col lg:h-fit rounded-[35.39px] bg-[#F7F7FD] gap-[25px]  py-[70px]">
                <div>
                    <h1 className="title text-[26px] leading-[62px]  lg:text-[40px] text-center w-[263px] lg:w-[802px]">Choose Us: Your Path to Innovation and <span className="bg-gradient-to-t from-[#4AC0F2]  to-[#3171DE] bg-clip-text text-transparent">Success</span></h1>
                </div>
                <div className="w-full overflow-scroll hide-scrollbar" ref={cardContainerRef}>
                    <div className="flex w-fit gap-[17px] lg:gap-[38px] mx-[17px] lg:mx-[26px]" style={{ scrollBehavior: 'smooth', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${scrollPosition}px)`, }}>
                        {
                            REASONS.map((reason, index) => (
                                <div key={index} className="reviewCard w-full py-4">
                                    <div className={`lg:h-[229px] h-[168px] w-[282.45px] lg:w-[385px] py-[27.14px] px-[20.54px] lg:px-[28px] lg:py-[37px] rounded-[35.39px] shadow-[rgba(0,_0,_0,_0.13)_0px_5px_14px_0px] ${reason.varient == 'green_gradient'? 'green_gradient': reason.varient}`}>
                                        <div className={`flex flex-col gap-[14px] lg:gap-[19px]`}>
                                            <label className={`text-[17.61px] lg:text-2xl ${reason.varient == 'bg-white' ? 'title' : 'text-white'}`}>{reason.title}</label>
                                            <p className={`text-[11.74px] lg:text-base ${reason.varient == 'bg-white' ? 'paragraph' : 'text-white font-light'}`}>{reason.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex  gap-[18px]">
                    <div className="lg:w-[65px] lg:h-[65px] w-[42.76px] h-[42.76px] bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={() => scrollCards('left')}>
                        <Image className='w-[21px] h-[21px] lg:w-auto lg:h-auto' src="/arrow-left.svg" alt='' width={32} height={32} />
                    </div>
                    <div className="lg:w-[65px] lg:h-[65px] w-[42.76px] h-[42.76px] bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={() => scrollCards('right')}>
                        <Image className='w-[21px] h-[21px] lg:w-auto lg:h-auto' src="/arrow-right.svg" alt='' width={32} height={32} />
                    </div>
                </div>
                <Image className="hidden lg:block absolute left-[147px] top-[508px]  -rotate-[4.39deg]" src="/blue_vector.svg" alt='' width={90.84} height={80.88} />
                <Image className="hidden lg:block absolute right-[113.25px] top-[71px]  -rotate-[4.39deg]" src="/green_vector.svg" alt='' width={90.84} height={80.88} />
            </div>
        </section>
    )
}

export default WhyUs