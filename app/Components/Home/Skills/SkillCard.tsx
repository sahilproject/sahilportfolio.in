import Image from 'next/image';
import React from 'react'

type props={
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}

const SkillCard = ({skill}:props) => {
  return (
    <div data-aos="flip-up" className='p-6 duration-300 transition-all cursor-pointer text-center rounded-lg s-dow'>
      <Image src={skill.image} alt={skill.title} width={80} height={80} className='object-cover mx-auto '/>
      <h1 className='text-[18px] mt-4 text-black font-[600]'>{skill.title}</h1>
      <div className='bg-white mt-4 rounded-lg p-2 text-black opacity-60 border-1'>{skill.percent}</div>
    </div>
  )
}

export default SkillCard
