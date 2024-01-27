import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/Logo.svg'
import FaceBook from '../../public/assets/Facebook.svg'
import Twitter from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'

function Footer() {
  return (
    <div className=' pt-[80px] pb-[40px]'>
      <div className='flex items-center justify-center gap-x-[12px]'>
        <Image src={logo} alt='' />
        <p className=' text-[#36485C] font-bold text-[17px] '>Asndaniel</p>
      </div>

      <ul className=' flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>

        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>

      <p className=' text-center pt-[56px] text-[14px] text-[#36485C] font-medium sm:pt-5'>© Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className=' flex items-center justify-center gap-x-[56px] pt-[40px]'>

        <Image src={FaceBook} alt='fb' />
        <Image src={Twitter} alt='X' />
        <Image src={Feed} alt='feed' />
      </div>
    </div>
  )
}

export default Footer
