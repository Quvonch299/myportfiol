import React from 'react'
import { IoColorPalette } from 'react-icons/io5'
import { PiBezierCurveThin } from 'react-icons/pi'

export default function Section3() {
  return (
    <div className='max-w-7xl m-auto mt-[100px] px-4'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0'>
            <div>
                <span className='text-[#7B4AE2] p-1 rounded-2xl bg-[#7B4AE21A]'>🔗 Portfólio</span>
                <h2 className='text-[36px] sm:text-[42px] md:text-[48px] text-white mt-2'>Trabalhos e projetos</h2>
            </div>

            <div className='flex flex-wrap gap-4 md:gap-[32px] justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0'>
                <span className='flex items-center gap-2 border-[#7B4AE280] border-[2px] p-2 rounded-2xl hover:bg-[#7B4AE21A] w-[140px] sm:w-[160px] md:w-[184px] justify-center text-[#7B4AE2]'>
                    <PiBezierCurveThin size={36} />UI Design
                </span>
                <span className='flex items-center gap-2 border-[#7B4AE280] border-[2px] p-2 rounded-2xl hover:bg-[#7B4AE21A] w-[140px] sm:w-[160px] md:w-[184px] justify-center text-[#7B4AE2]'>
                    <IoColorPalette size={36} />Design
                </span>
                <span className='flex items-center gap-2 border-[#7B4AE280] border-[2px] p-2 rounded-2xl hover:bg-[#7B4AE21A] w-[140px] sm:w-[160px] md:w-[184px] justify-center text-[#7B4AE2]'>
                    <PiBezierCurveThin size={36} />UI Design
                </span>
            </div>
        </div>
    </div>
  )
}
