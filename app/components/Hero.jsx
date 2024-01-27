import React from 'react'
import Image from 'next/image'
import Arrow from '../../public/assets/blue-button.svg'
import Grad from '../../public/assets/Gradient.svg'
import HeroImg from '../../public/assets/Image.svg'
import Google from '../../public/assets/Google.svg'
import Slack from '../../public/assets/Slack.svg'
import Trustpilot from '../../public/assets/Trustpilot.svg'
import cnn from '../../public/assets/CNN.svg'
import Clutch from '../../public/assets/Clutch.svg'

function Hero() {
  return (
    <div className=' pt-4 lg:pt-10'>
      <div className=' px-[20px] lg:px-[280px] lg:mb-[200px] xl:mb-0'>
        <h1 className=' text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]'>Start monitoring your website like a pro</h1>
        <p className=' text-center pt-[24px] text-[#36485C] lg:text-[18px] lg:leading-7'>Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>

        <div className=' flex w-full pt-8  justify-center gap-7'>
          <button className=' bg-[#4328EB] w-1/2 py-[16px] px-[32px] text-white rounded-[4px] lg:w-fit'>Try for free</button>
          <button className=' w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit'>View Pricing <span><Image src={Arrow} alt='button' /></span></button>
        </div>
      </div>



      <div className=' relative flex h-full w-full justify-center'>
        <Image
          src={Grad}
          alt='grad'
          className=' min-h-[500px] w-full object-cover lg:h-auto'

        />

        <div className=' absolute bottom-5 flex  flex-col w-full items-center'>
          <Image
            src={HeroImg}
            alt='s'
            className=' -ml-5 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto  xl:w-[70%]'

          />

          <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
            <p className=' text-[#FFFFFF] text-center lg:text-[18px]'>Trusted by these companies
            </p>
            <div className=' grid grid-cols-3 item justify-center justify-items-center px-[20px]  align-middle lg:grid-cols-5'>
              <Image src={Google} alt='' />
              <Image src={Slack} alt='' />
              <Image src={Trustpilot} alt='' />
              <Image src={cnn} alt='' />
              <Image src={Clutch} alt='' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
