import TiltedCard from '@/components/TiltedCard'
import React from 'react'
import { GrCaretNext } from 'react-icons/gr'

export default function VisGeo() {
  return (
    <TiltedCard
      altText="Quvonchbek"
      captionText="Kendrick Lamar - GNX"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <div className='flex flex-col justify-center   items-center border border-[#7B4AE280] rounded-2xl p-4 sm:p-5 w-full max-w-[340px]'>
          <div className='w-full h-[200px] sm:h-[261px]'>
            <img className='rounded-2xl object-cover h-full w-full' src="./visGeo.png" alt="" />
          </div>
          <div className='flex flex-col sm:flex-row justify-between mt-4 sm:mt-[30px] w-full'>
            <div className='mb-2 sm:mb-0'>
              <h2 className='text-white text-lg sm:text-xl'>Move.it</h2>
              <h2 className='mt-1 text-[#FFFFFF80] text-[12px] sm:text-[14px]'>Move.it</h2>
            </div>
            <div>
              <div className='flex gap-2 mb-2 flex-wrap'>
                <p className='text-[#7B4AE280] border-[#7B4AE280] border-[0.1px] rounded-[11px] px-1 text-sm'>React JS</p>
                <p className='text-[#7B4AE280] border-[#7B4AE280] border-[0.1px] rounded-[11px] px-1 text-sm'>React JS</p>
              </div>
              <h2 className='mt-1 text-[#FFFFFF80] flex justify-center sm:justify-end items-center text-sm'>
                Assistir <div className='text-[#7B4AE280] ml-1'><GrCaretNext size={16} /></div>
              </h2>
            </div>
          </div>
        </div>
      }
    />
  )
}
