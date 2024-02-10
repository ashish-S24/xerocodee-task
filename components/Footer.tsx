import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="max-container flexStart px-5 lg:px-0">
      <div className="relative w-full flex flex-col gap-[49px] lg:gap-0 lg:mx-[133px] pb-[32.39px]">
        <div className="w-full flex gap-[49px] lg:gap-0 flex-col flexStart lg:flex-row lg:justify-between lg:items-start">
          <div className=" max-sm:w-[288px] flex flex-col-reverse lg:flex-row gap-[24px] lg:gap-[112px]">
            <div className="w-full lg:w-[197px] relative pt-[32.39px]  flex flex-col gap-[15.22px]">
              <h1 className="text-base font-normal text-[#0A142F]">Product</h1>
              <ul className="flex flex-col gap-[16px] text-base font-normal text-[#0A142F] text-opacity-50">
                <li>Employee database</li>
                <li>Payroll</li>
                <li>Absences</li>
                <li>Time Tracking</li>
                <li>Shift planner</li>
                <li>Recruiting</li>
              </ul>
            </div>
            <div className="relative top-[32.39px] flex lg:gap-[158.5px] gap-[70px] lg:justify-normal">
              <div className="flex flex-col gap-[15.22px]">
                <h1 className="text-base font-normal text-[#0A142F]">Information</h1>
                <ul className="flex flex-col gap-[16px] text-base font-normal text-[#0A142F] text-opacity-50">
                  <li>FAQ</li>
                  <li>Blog</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[15.22px]">
                <h1 className="text-base font-normal text-[#0A142F]">Company</h1>
                <ul className="flex flex-col gap-[16px] text-base font-normal text-[#0A142F] text-opacity-50">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Contact us</li>
                  <li>Lift Media</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[369.47px] lg:h-[261px] rounded-[30px] bg-[#F7F7FD] py-[31.77px] px-[28px] lg:py-[32.39px] lg:px-[40px]">
            <div className="flex flex-col h-full w-full gap-[18px] lg:gap-0 justify-between">
              <h1 className="text-base font-normal text-[#0A142F]">Subscribe</h1>
              <div className="relative w-full h-[50.61px]">
                <input className="w-full h-full border-[1.5px] text-sm rounded-[30px] outline-none relative py-[19.08px] pl-[23.56px] font-light" type="text" placeholder='Email address'></input>
                <span className='absolute w-[54.66px] flex items-center justify-center top-0  h-full  rounded-full z-0 right-0 bg-[#3171DE] cursor-pointer'>
                  <img className='absolute z-30' src="/arrows-move.svg" alt='' />
                </span>
              </div>
              <p className="w-full text-xs  leading-[20.4px] font-normal text-[#0A142F] text-opacity-50">
                Hello, we are Lift Media. Our goal is to translate
                the positive effects from revolutionizing how companies
                engage with their clients & their team.'
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] border  border-[#0A142F] opacity-[6%] lg:mt-16"></div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-[21px] lg:gap-0 lg:mt-8">
          <div className="flex items-center gap-[28px] lg:gap-[412.44px]">
            <div><Image src="/logo.png" alt="logo" width={45.58} height={47} /></div>
            <div className="flex gap-[44px] text-sm text-[#0A142F] font-normal">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
          </div>
          <div className="flex gap-[16.4px]">
            <Image src="/social_icons/Linkedin.svg" alt='socila' width={38.26} height={35.43} />
            <Image src="/social_icons/Facebook.svg" alt='socila' width={38.26} height={35.43} />
            <Image src="/social_icons/Twitter.svg" alt='socila' width={38.26} height={35.43} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer