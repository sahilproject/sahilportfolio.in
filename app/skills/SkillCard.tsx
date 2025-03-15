import Image from 'next/image';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string; // Example: "60%"
    };
};

const SkillCard = ({ skill }: Props) => {
    const percentage = parseInt(skill.percent); // Convert percent string to number

    return (
        <div data-aos="flip-up" className="p-6 duration-300 transition-all cursor-pointer text-center rounded-lg s-dow">
            <Image src={skill.image} alt={skill.title} width={80} height={80} className="object-cover mx-auto" />
            <h1 className="text-[18px] mt-4 text-black font-[600]">{skill.title}</h1>

            <div className="w-14 h-14 mx-auto mt-4 relative flex items-center justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: '#4CAF50', 
                        trailColor: '#ddd',
                        textColor: 'transparent', 
                    })}
                />
                <div className="absolute text-[13px] font-bold text-black">{percentage}%</div>
            </div>
        </div>
    );
};

export default SkillCard;
