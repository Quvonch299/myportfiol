import React from 'react'
import VisGeo from '../ui/VisGeo'

export default function Section5() {
  return (
    <div className='max-w-7xl m-auto mt-20 px-4'>
      <div className='mb-12 text-center md:text-left'>
        <h2 className='text-[36px] sm:text-[42px] md:text-[48px] font-bold text-white'>Projetos em vídeos</h2>
        <p className='text-[#FFFFFF80] mt-2'>Sempre é bom saber um pouquinho de edição</p>
      </div>

      <div className=' flex justify-center gap-10 max-sm:flex max-sm:flex-col  max-sm:gap-[100px] max-sm:items-center'>
        <VisGeo/>
        <VisGeo/>
        <VisGeo/>
      </div>
    </div>
  )
}
