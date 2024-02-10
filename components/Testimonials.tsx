"use client"
import Image from 'next/image'
import React,{useState , useRef, useEffect} from 'react'
import ReviewCard from './ReviewCard'
import { REVIEWS } from '@/constants'

const Testimonials: React.FC = () => {

{/* ------------------------- Card Carousel logic ------------------------ */}

  const [scrollPosition, setScrollPosition] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardContainerRef.current) {
      const totalWidth = cardContainerRef.current.scrollWidth;
      const numCards = cardContainerRef.current.children.length;
      const averageCardWidth = totalWidth / numCards;
      setCardWidth(averageCardWidth - 300);
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
    <section className="relative max-container padding-container mt-[68px] lg:mt-0 lg:h-[1139px] flex flex-col gap-[38px] lg:gap-0">
      <div className="relative w-full h-fit flex flex-col lg:flex-row gap-[38px] lg:gap-0 px-6 lg:px-0">
        <div className="w-full">
          <Image src="/clients.png" alt='' width={709} height={675} />
        </div>
        <div className="lg:w-full">
          <div className="flex flex-col lg:gap-[38px] gap-[17.67px]  lg:mt-[40px] lg:ml-[41px] lg:pr-9">
            <h1 className="font-medium title text-[26px] text-center lg:text-left lg:text-[40px] tracking-wider">We've stopped counting. Over 500 brands count on us.</h1>
            <p className="lg:text-xl text-xs text-[#525252] text-center lg:text-left">Our 4,000+ team has expertise in  almost <br /> everyprogramming language.</p>
          </div>
        </div>
      </div>
      <div className="lg:absolute flexCenter flex-col gap-[27px] left-0 lg:top-[381px] lg:w-screen  lg:pt-[24px] lg:pb-[40px]  lg:gap-[79px]">
        <div className="flex lg:w-full w-screen overflow-scroll hide-scrollbar" ref={cardContainerRef} data-testid="card-container">
            <div className="flex gap-[27px] lg:gap-[39px] w-fit ml-6 mr-6 lg:ml-[48px] lg:mr-[48px]"  style={{ scrollBehavior: 'smooth', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${scrollPosition}px)`,  }}>
             {
                REVIEWS.map((card, index)=>(
                    <div key={index} className="reviewCard w-full lg:py-4">
                      <ReviewCard icon={card.icon} head={card.head} review={card.review} name={card.name} title={card.title} />
                    </div>
                ))
             }
            </div>
             <Image className="absolute -z-10 left-[1278px] top-[23%] hidden lg:flex" src="/blue_vector.svg" alt='' width={191.15} height={170.19}/>
        </div>
        <div className="flex gap-[18px]">
            <div className="lg:w-[65px] lg:h-[65px] w-[42.76px] h-[42.76px] bg-[#F7F7FD] rounded-full flex items-center justify-center cursor-pointer" onClick={() => scrollCards('left')} data-testid="left-arrow-button">
              <Image className='w-[21px] h-[21px] lg:w-auto lg:h-auto' src="/arrow-left.svg" alt='left arrow' width={32} height={32}/>
            </div>
            <div className="lg:w-[65px] lg:h-[65px] w-[42.76px] h-[42.76px] bg-[#F7F7FD] rounded-full flex items-center justify-center cursor-pointer" onClick={() => scrollCards('right')} data-testid="right-arrow-button">
              <Image className='w-[21px] h-[21px] lg:w-auto lg:h-auto' src="/arrow-right.svg" alt='right arrow' width={32} height={32}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials