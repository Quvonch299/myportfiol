import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi' // Hamburger icon
import { IoMdClose } from 'react-icons/io' // Close icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='pt-[38px] px-4'>
      <div className='h-[64px] rounded-2xl p-4 items-center max-w-7xl m-auto flex justify-between text-white bg-[#0F1120]'>
        <div className=''>
          <img src="./Logo.svg" alt="Logo" className=''/>
        </div>

        <div className='hidden md:flex gap-[16.5px]'>
          <a className='text-[#261E4A] hover:text-white transition-colors' href="">Home</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Sobre mim</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Portfólio</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Skills</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Carreira</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Recomendações</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Contato</a>
        </div>

        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden mt-2 bg-[#0F1120] rounded-2xl p-4 flex flex-col gap-3 text-center'>
          <a className='text-[#261E4A] hover:text-white transition-colors' href="">Home</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Sobre mim</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Portfólio</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Skills</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Carreira</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Recomendações</a>
          <a className='text-[#787982] hover:text-white transition-colors' href="">Contato</a>
        </div>
      )}
    </div>
  )
}
