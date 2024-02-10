import { SERVICES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  const wordsToLink = [
    { phrase: 'custom software', url: 'https://example.com/custom-software' },
    { phrase: 'mobile application', url: 'https://example.com/mobile-application' },
    // Add more phrases and URLs as needed
  ];
  return (
    <section className="max-container lg:padding-container md:gap-20 gap-7 flexCenter flex flex-col md:h-[1135px] h-[559px]" data-testid="services-container">
      <div className="flex gap-3 md:gap-[18px] pr-5 md:pr-0 px-4 md:px-0">
        <div> <Image src="/blue_vector.svg" width={90.84} height={80.88} alt='' /> </div>
        <div className="w-full">
          <h1 className="w-[240px] md:w-full text-2xl md:text-[40px] font-medium leading-relaxed text-[#3D3D3D] text-opacity-100">Empowering Your Digital Vision: Our <br /> Comprehensive Tech Services.</h1>
        </div>
      </div>
     {/*----------------------- Desktop View Cards ------------------------------- */}
      <div className="relative hidden md:flex md:flex-col gap-[52px] lg:padding-container py-5">
        <div className='flex gap-[48px]'>
          {SERVICES.slice(0, 3).map((service, index) => (
            <div key={index} className="bg-white  flex flex-col justify-between rounded-[35.39px] md:h-[321px] w-full shadow-[rgba(0,_0,_0,_0.13)_0px_5px_14px_0px]">
              <Image className=' ml-7 mt-7' src={service.icon} width={50} height={50} alt='' />
              <div className="mx-7 mb-7 flex flex-col gap-5">
                <h1 className="title text-[28px]">{service.title}</h1>
                <p role="paragraph" className="paragraph text-base">
                  {service.description.map((part, i) =>
                    typeof part === 'object' ? (
                      <a className="underline font-light" key={i} href={part.link}>{part.text}</a>
                    ) : (
                      <span className="font-light" key={i}>{part}</span>
                    )
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-[48px]'>
          {SERVICES.slice(3).map((service, index) => (
            <div key={index} className="bg-white flex flex-col justify-between rounded-[35.39px] md:h-[321px] w-full shadow-[rgba(0,_0,_0,_0.13)_0px_5px_14px_0px]">
              <Image className=' ml-7 mt-7' src={service.icon} width={50} height={50} alt='' />
              <div className="mx-7 mb-7 flex flex-col gap-5">
                <h1 className="title text-[28px]">{service.title}</h1>
                <p className="paragraph text-base font-light">
                  {service.description.map((part, i) =>
                    typeof part === 'object' ? (
                      <a className="underline font-light" key={i} href={part.link}>{part.text}</a>
                    ) : (
                      <span className="font-light" key={i}>{part}</span>
                    )
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image className="hidden md:block absolute left-[313px] top-[480px] -z-10 -rotate-[4.39deg]" src="/blue_vector.svg" alt='' width={191.15} height={170.19} />
        <Image className="hidden md:block absolute left-[800px] top-[230px] -z-10 -rotate-[4.39deg]" src="/green_vector.svg" alt='' width={191.15} height={170.19} />
      </div>

      {/*----------------------- Mobile View Cards ------------------------------- */}

      <div className=" md:hidden overflow-scroll hide-scrollbar w-full" data-testid="mobile-view-cards-container">
        <div className="flex gap-9 px-6 overflow-scroll hide-scrollbar py-5 w-[1560px]">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white h-[285px] w-[220px] flex flex-col justify-between rounded-[35.39px] shadow-[rgba(0,_0,_0,_0.13)_0px_5px_14px_0px]">
              <Image className=" ml-5 mt-5 " src={service.icon} width={36.48} height={36.48} alt='' />
              <div className="mx-5 mb-5 flex flex-col gap-[13.86px]">
                <h1 className="title text-[20.43px]">{service.title}</h1>
                <p className="paragraph text-[11.67px]">
                  {service.description.map((part, i) =>
                    typeof part === 'object' ? (
                      <a className="underline font-light" key={i} href={part.link}>{part.text}</a>
                    ) : (
                      <span className="font-light" key={i}>{part}</span>
                    )
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services