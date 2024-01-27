import React from 'react'
import Image from 'next/image'
import Arrow from '../../public/assets/arrow.png'

function Cta() {
  return (
    <div className='w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[325px] lg:py-[89px]'>

      <h1 className=' text-[#FFFFFF] text-[32px] font-medium lg:text-[50px] leading-[64px]'>
        Monitor your website like a pro
      </h1>
      <p className=' text-[#FFFFFF] text-[16px] pt-[24px] lg:pt-[48px] lg:text-[18px]'>
        Join over 800+ happy site owners boosting productivity and efficiency
      </p>

      <div className=' mt-[40px] flex flex-col w-full items-center lg:flex-row lg:mt-[56px] lg:justify-center gap-x-[40px]'>
        <button className=' py-[16px] px-[32px] bg-white rounded-[4px] text-pink-600 font-medium text-[18px] w-fit'>
          Try For Free
        </button>

        <button className=' flex items-center justify-center w-full gap-x-4 mt-[32px] text-white font-medium lg:w-fit lg:mt-0'>
          Contact Sales
          <span>
            <Image src={Arrow} alt='contact sales' />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Cta
