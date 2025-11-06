import React, { useState } from 'react'

export default function Section6() {
  const [activeTab, setActiveTab] = useState('') // default bo‘lib daily ko‘rsatiladi

  const dailyTechs = [
    './React.png', './js.png', './TypeScript.png', './Nextjs.png', 
    './html.png', './HTML5.png', './Figma.png', './Github.png', 
    './Shape.png', './Insomnia.png'
  ]

  const otherTechs = [
    './bitbucket.png', './Vue.png', './Nodejs.png', './TailwindCSS.png',
    './Shape (1).png', './Python.png', './Group 26.png', './Union.png',
    './Group 27.png', './Docker.png'
  ]

  return (
    <div className='mb-[100px] max-w-7xl m-auto flex justify-center items-center flex-col mt-50 px-4'> 

      <div className='flex flex-col max-sm:gap-4 max-sm:text-center justify-center items-center mb-12 gap-8'>
        <p className='text-[20px] text-[#7B4AE2] rounded-2xl flex justify-center bg-[#7B4AE21A] w-[234px] font-bold max-sm:ml-0'>
          🧑‍💻 Skills · Experiências
        </p>
        <h2 className='text-[48px] text-[#fefefe]'>Tecnologias e habilidades</h2>
      </div>

      <div className='flex gap-4 mb-8'>
        <button 
          className={`px-4 py-2 rounded-xl font-bold ${activeTab === 'daily' ? 'bg-[#7B4AE2] text-white' : 'bg-[#7B4AE21A] text-[#7B4AE2]'}`}
          onClick={() => setActiveTab('daily')}
        >
          Techs que uso no dia a dia
        </button>
        <button 
          className={`px-4 py-2 rounded-xl font-bold ${activeTab === 'other' ? 'bg-[#7B4AE2] text-white' : 'bg-[#7B4AE21A] text-[#7B4AE2]'}`}
          onClick={() => setActiveTab('other')}
        >
          Outras techs com que já realizei projetos
        </button>
      </div>

      <div className='flex flex-wrap justify-center gap-4 sm:gap-[32px] text-white'>
        {activeTab === 'daily' && dailyTechs.map((src, i) => (
          <img key={i} src={src} alt="" className=' '/>
        ))}

        {activeTab === 'other' && otherTechs.map((src, i) => (
          <img key={i} src={src} alt="" className=' '/>
        ))}
      </div>
    </div>
  )
}
