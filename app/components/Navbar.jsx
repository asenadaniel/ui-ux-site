import React from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import Menu from '../../public/assets/Menu.svg'

function Navbar() {

  const links = [

    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Enterprise' },
    { name: 'Careers' },

  ]

  return (
    <nav className=' flex items-center justify-between w-full  px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>
      <div className=' flex items-center cursor-pointer'>
        <Image src={Logo} alt='logo' />

        <div className=' items-center hidden lg:flex gap-[56px] pl-[74px]' >
          {links.map((item, index) => (
            <p className=' text-[#36485C] font-medium cursor-pointer' key={index}>{item.name}</p>
          ))}
        </div>
      </div>

      <div className=' flex  gap-6'>
        <p className=' hidden lg:block text-[#36485C] font-medium pr-[56px] cursor-pointer'>Open an Account</p>
        <div className=' flex items-center gap-x-2'>
          <Image src={User} alt='user' className=' cursor-pointer' />
          <span className='hidden font-medium text-[#36485C]  lg:block cursor-pointer' >Sign in</span>
        </div>

        <Image src={Menu} alt='Menu' className='lg:hidden  cursor-pointer' />
      </div>
    </nav>
  )
}

export default Navbar
