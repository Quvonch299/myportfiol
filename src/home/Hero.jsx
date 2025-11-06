import React from 'react'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { RxLinkedinLogo } from 'react-icons/rx'

export default function Hero() {
    return (
        <div className='max-w-7xl m-auto mt-[87px] px-4'>
            <div className='flex justify-between items-center flex-wrap md:flex-nowrap'>
                <div className='text-center md:text-left w-full md:w-1/2 mb-10 md:mb-0'>
                    <h2 className='mb-[19px] text-white bg-[#7B4AE21A] inline-block p-1 rounded-full'>
                        👋 Saudações!
                    </h2>
                    <p className='mb-[20px] md:mb-[50px] text-white text-[36px] md:text-[54px] font-bold leading-tight'>
                        Pilar <br /> Ch
                    </p>
                    <span className='text-[#FFFFFF80] block mb-4'>
                        Front-end developer · UI designer
                    </span>
                    <div className='mt-[30px] md:mt-[50px] text-[#FFFFFF80] text-[28px] md:text-[32px] flex justify-center md:justify-start gap-[16px]'>
                        <RxLinkedinLogo />
                        <FaGithub />
                        <FaTelegram />
                    </div>
                </div>

                <div className='w-full md:w-auto flex justify-center mb-6 md:mb-0'>
                    <img src="./AvatarAndIcons.svg" alt="" className='max-w-[250px] md:max-w-none' />
                </div>

                <div className='w-full md:w-auto flex justify-center'>
                    <img src="./grid3.png" alt="" className='max-w-[200px] md:max-w-none' />
                </div>
            </div>
        </div>
    )
}
