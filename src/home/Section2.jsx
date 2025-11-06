import React from 'react'

export default function Section2() {
    return (
        <div className='max-w-7xl m-auto mt-[120px] px-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-8 md:gap-16 items-center">
                <div className='flex justify-center md:justify-start'>
                    <img src="circleimage.png" alt="Sobre mim" className='w-[200px] sm:w-[250px] md:w-auto' />
                </div>

                <div>
                    <h2 className='mt-[24px] text-[#7B4AE2] text-center md:text-left'>🧐 Sobre mim</h2>
                    <h2 className='mb-[24px] md:mb-[33px] text-[36px] sm:text-[42px] md:text-[48px] text-center md:text-left'>Pilar Ch</h2>
                    <p className='text-[#FFFFFF80] text-base sm:text-lg md:text-[16px] text-center md:text-left leading-relaxed'>
                        👋 Con habilidades tecnológicas <br/>
                        👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS. <br/>
                        🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos  <br/>
                        💡 Interesses em desenvolvimento Front-end com React, React Native,  e UX/UI Design. <br/>
                        🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
                    </p>
                </div>
            </div>
        </div>
    )
}
