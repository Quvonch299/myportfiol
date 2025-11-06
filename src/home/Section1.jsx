import React from 'react'
import Card from '../ui/Card'
import { IoCodeSlashOutline } from 'react-icons/io5'
import { CiAlignRight } from 'react-icons/ci'
import { PiBezierCurveThin } from 'react-icons/pi'

export default function Section1() {
  return (
    <div className='max-w-4xl m-auto mt-[120px] px-4'>
      <div className='flex max-sm:flex-col max-sm:items-center gap-6 justify-center md:gap-20 md:justify-between'>
        <Card text={'3 anos como'} text2={'Programador'} icon={<IoCodeSlashOutline size={70} />} />
        <Card text={'7 anos de'} text2={'Trabalhos'} icon={<CiAlignRight size={70} />} />
        <Card text={'4 anos como'} text2={'Designer'} icon={<PiBezierCurveThin size={70} />} />
      </div>

      <div className='w-full md:w-[891px] px-4 md:px-10 rounded-2xl mt-6 md:mt-9 bg-[#7B4AE21A] flex flex-col md:flex-row justify-between items-center h-auto md:h-[110px] gap-4 md:gap-0'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#7B4AE2]'>Desenvolvedor</p>
          <h2 className='text-[28px] md:text-[32px] text-[#7B4AE2] font-bold'>Front-end</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#7B4AE2] text-center md:text-left'>Dezenas de projetos e</p>
          <h2 className='text-[28px] md:text-[32px] text-[#7B4AE2] font-bold'>Experiências</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#7B4AE2] text-center md:text-left'>Designer Freelancer e</p>
          <h2 className='text-[28px] md:text-[32px] text-[#7B4AE2] font-bold'>UI · UX</h2>
        </div>
      </div>
    </div>
  )
}
