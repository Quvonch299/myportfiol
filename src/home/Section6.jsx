import React, { useState } from 'react';
import { FaReact, FaJsSquare, FaPython, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function Section6() {
  const [activeTab, setActiveTab] = useState(' '); // default daily

  const dailyTechs = [
    { name: 'React', icon: <FaReact className="text-[#61DBFB]"/>, level: 90 },
    { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]"/>, level: 95 },
    { name: 'TypeScript', icon: <FaJsSquare className="text-[#3178C6]"/>, level: 0 },
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]"/>, level: 100 },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]"/>, level: 99 },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#3C873A]"/>, level: 70 },
  ];

  const otherTechs = [
    { name: 'Python', icon: <FaPython className="text-[#3776AB]"/>, level: 20 },
    { name: 'Vue', icon: <FaJsSquare className="text-[#42B883]"/>, level: 0 },
    { name: 'Docker', icon: <FaNodeJs className="text-[#0db7ed]"/>, level: 0 },
  ];

  const renderSkills = (skills) => (
    skills.map((skill, i) => (
      <div key={i} className="w-[250px] bg-[#2b2b2b] rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            {skill.icon} 
            <span className="text-white font-semibold">{skill.name}</span>
          </div>
          <span className="text-white font-bold">{skill.level}%</span>
        </div>
        <div className="bg-[#555] rounded-full h-3">
          <div className="bg-[#7B4AE2] h-3 rounded-full" style={{ width: `${skill.level}%` }}></div>
        </div>
      </div>
    ))
  );

  return (
    <div className='mb-[100px] max-w-7xl m-auto flex justify-center items-center flex-col mt-12 px-4'> 

      <div className='flex flex-col max-sm:gap-4 max-sm:text-center justify-center items-center mb-12 gap-8'>
        <p className='text-[20px] text-[#7B4AE2] rounded-2xl flex justify-center bg-[#7B4AE21A] w-[234px] font-bold max-sm:ml-0'>
          🧑‍💻 My Skills
        </p>
        <h2 className='text-[48px] text-[#fefefe]'>Tecnologias e habilidades</h2>
      </div>

      <div className='flex gap-4 mb-8'>
        <button 
          className={`px-4 py-2 rounded-xl font-bold ${activeTab === 'daily' ? 'bg-[#7B4AE2] text-white' : 'bg-[#7B4AE21A] text-[#7B4AE2]'}`}
          onClick={() => setActiveTab('daily')}
        >
       Hight Skills
        </button>
        <button 
          className={`px-4 py-2 rounded-xl font-bold ${activeTab === 'other' ? 'bg-[#7B4AE2] text-white' : 'bg-[#7B4AE21A] text-[#7B4AE2]'}`}
          onClick={() => setActiveTab('other')}
        >
     Less Skills
        </button>
      </div>

      <div className='flex flex-wrap justify-center gap-6'>
        {activeTab === 'daily' && renderSkills(dailyTechs)}
        {activeTab === 'other' && renderSkills(otherTechs)}
      </div>
    </div>
  );
}
