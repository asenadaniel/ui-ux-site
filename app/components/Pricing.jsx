import React from 'react'
import Image from 'next/image'
import check from '../../public/assets/check.svg'

function Pricing() {
  return (
    <div className=' py-[48px] lg:py-[60px]'>
      <h1 className=' text-[#172026] text-center text-[24px] font-medium lg:text-[42px]'>Flexible plans for you
      </h1>
      <p className=' text-center text-[#36485C] pt-[16px] pb-[40px] text-[16px] lg:text-18px]'>No hidden fees!
      </p>

      <div className=' flex flex-col gap-y-6 lg:flex-row gap-x-[24px]'>
        <div className=' w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className=' font-medium text-[18px] text-[#4328EB] lg:text-[20px]'>Free Trial</h3>
            <p className=' pt-[12px] text-[#36485C] lg:text-[18px]'>Perfect for testing the waters</p>

            <h2 className='pt-[16px] text-2xl font-medium lg:text-[32px]'>
              0$<span className=' text-[#5F7896]'>/mo</span>
            </h2>
            <ul className=' flex flex-col gap-y-2 pt-4 text-[#5F7896]'>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className=' mt-[16px] py-[14px] bg-white rounded-[4px] text-[#4328EB] font-medium'>
            Start Trial
          </button>
        </div>

        <div className=' w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className=' font-medium text-[18px] text-[#F4F8FA] lg:text-[20px]'>Business</h3>
            <p className=' pt-[12px] text-[#F4F8FA] lg:text-[18px]'>Perfect for small businesses</p>

            <h2 className='pt-[16px] text-[#F4F8FA] text-2xl font-medium lg:text-[32px]'>
              $500<span className=' text-[#F4F8FA]'>/mo</span>
            </h2>
            <ul className=' flex flex-col gap-y-2 pt-4 text-[#F4F8FA]'>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className=' flex items-center gap-x-2'>
                <span>
                  <Image src={check} alt='check' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className=' mt-[16px] py-[14px] bg-white rounded-[4px] text-[#4328EB] font-medium'>
            Get Started
          </button>
        </div>

        <div className=' w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className=' font-medium text-[18px] text-[#4328EB] lg:text-[20px]'>Enterprise</h3>
            <p className=' pt-[12px] text-[#36485C] lg:text-[18px]'>Perfect for big companies</p>

            <h2 className='pt-[16px] text-2xl font-medium lg:text-[32px] text-[#172026]'>
              Custom
            </h2>

            <p className='pt-5 text-[16px] text-[#36485C]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <p className='pt-3 text-[16px] text-[#36485C]'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

          </div>
          <button className=' mt-[16px] py-[14px] bg-white rounded-[4px] text-[#4328EB] font-medium'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
