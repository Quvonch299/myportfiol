import React from 'react'

export default function Card({ text, text2, icon }) {
  return (
    <div className='border-[#7B4AE280] flex flex-col justify-center items-center border-[2px] rounded-2xl hover:bg-[#7B4AE280] duration-500 w-[200px] sm:w-[220px] md:w-[246px] h-[180px] sm:h-[190px] md:h-[200px] bg-[#090E16]'>
      <div className='text-[#7B4AE2]'>{icon}</div>
      <p className='text-white mt-2'>{text}</p>
      <h2 className='text-white text-[28px] sm:text-[30px] md:text-[32px] font-bold'>{text2}</h2>
    </div>
  )
}
