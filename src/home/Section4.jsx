import React from 'react'
import MoveItCard from '../ui/MoveItCard'

export default function Section4() {
  return (
    <div className='max-w-7xl m-auto mt-[100px] px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10'>
        <MoveItCard/>
        <MoveItCard/>
        <MoveItCard/>
        <MoveItCard/>
        <MoveItCard/>
        <MoveItCard/>
        <MoveItCard/>
        <MoveItCard/>
      </div>
    </div>
  )
}
