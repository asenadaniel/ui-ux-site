import React from 'react'
import Image from 'next/image'
import feature1 from '../../public/assets/feature-1.svg'
import feature2 from '../../public/assets/feature-2.svg'
import feature3 from '../../public/assets/feature-3.svg'
import check from '../../public/assets/check.svg'
import bluebutton from '../../public/assets/blue-button.svg'
import greenbutton from '../../public/assets/green-button.svg'
import pinkbutton from '../../public/assets/pink-button.svg'

function Features() {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'>
      <div className='flex flex-col sm:flex-row-reverse gap-x-6'>
        <Image
          src={feature1}
          alt=''
          className='hidden  w-1/2  sm:block'
        />
        <div className=' sm:w-1/2 lg:py-[56px] lg:pr-[56px]' >
          <h3 className='font-medium text-[#0085FF] lg:text-[18px]'>Sales Monitoring</h3>
          <h1 className=' pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] leading-[50px]'>Simplify your sales monitoring</h1>
          <Image
            src={feature1}
            alt='feauture'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
          <ul className='flex flex-col gap-y-3 text-[18px]'>
            <li className='flex items-center gap-x-2 text-
            [#36485C]'>
              <span><Image src={check} alt='check' /></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-
            [#36485C]'>
              <span><Image src={check} alt='check' /></span>
              Consectetur adipiscing elit
            </li>
            <li className='flex items-center gap-x-2 text-
            [#36485C]'>
              <span><Image src={check} alt='check' /></span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className=' flex items-center gap-x-5 pt-[24px] text-[#0085FF] font-medium lg:text-[18px]'>
            Learn More <span><Image src={bluebutton} alt='button' /></span>
          </p>
        </div>
      </div>



      <div className='flex flex-col sm:flex-row gap-x-6'>
        <Image
          src={feature2}
          alt=''
          className='hidden  w-1/2  sm:block'
        />
        <div className=' sm:w-1/2 lg:py-[56px] lg:pl-[56px]' >
          <h3 className='font-medium  text-[#00A424]  lg:text-[18px]'>Customer Support</h3>
          <h1 className=' pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] leading-[50px]'>Get in touch with your customers</h1>
          <Image
            src={feature2}
            alt='feauture'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
          <ul className='flex flex-col gap-y-3 text-[18px]'>
            <li className='flex items-center gap-x-2 text-
            [#36485C]'>
              <span><Image src={check} alt='check' /></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-
            [#36485C]'>
              <span><Image src={check} alt='check' /></span>
              Consectetur adipiscing elit
            </li>
            <li className='flex items-center gap-x-2 text-
            [#36485C]'>
              <span><Image src={check} alt='check' /></span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className=' flex items-center gap-x-5 pt-[24px] text-[#00A424] font-medium lg:text-[18px]'>
            Learn More <span><Image src={greenbutton} alt='button' /></span>
          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row-reverse gap-x-6'>
        <Image
          src={feature3}
          alt=''
          className='hidden  w-1/2  sm:block'
        />
        <div className=' sm:w-1/2 lg:py-[56px] lg:pr-[56px]' >
          <h3 className='font-medium text-[#EB2891] lg:text-[18px] '>Growth Monitoring</h3>
          <h1 className=' pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] leading-[50px]'>Monitor your site’s new subscribers </h1>
          <Image
            src={feature3}
            alt='feauture'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>

          <div className='flex w-full gap-x-[24px] '>
            <div className='w-1/2 flex-col gap-y-3'>
              <h3 className=' font-medium text-[20px] text-[#EB2891]'>100+</h3>
              <p className=' text-[#36485C]'>Lorem ipsum dolor si</p>
            </div>
            <div className='w-1/2 flex-col gap-y-3'>
              <h3 className=' font-medium text-[20px] text-[#EB2891]'>800+</h3>
              <p className=' text-[#36485C]'>Conse adipiscing eli</p>
            </div>
          </div>

          <p className=' flex items-center gap-x-5 pt-[24px] text-[#EB2891] font-medium lg:text-[18px]'>
            Learn More <span><Image src={pinkbutton} alt='button' /></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
