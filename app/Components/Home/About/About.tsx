import React from "react";
import "./About.css";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";



const About = () => {
  return (
    <>
    <div className="pt-10 pb-10 bg-[#ececec] text-white ">
      <div className="flex justify-center" >
        <h2 className="about-heading bg-heading">
          <span>About </span>
          <span style={{ color: "blue", fontSize: "35px" }}>m</span>
          <span>e</span>
        </h2>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 item-center mt-7">
      
        <div>
          <h1 data-aos="fade-right" className="text-bg text-[26px] mt-10 sm:text-3xl md:text-4xk lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p data-aos="fade-right" className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
        <div data-aos="fade-left">
            <Image src={"/images/customer.webp"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.client}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Satisfied Customer</p>
        </div>
        <div data-aos="fade-left">
            <Image src={"/images/experience.webp"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.exprience}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Years Exprience</p>
        </div>
        <div data-aos="fade-left">
            <Image src={"/images/completed.webp"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.project}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Completed Project</p>
        </div>
        <div data-aos="fade-left">
            <Image src={"/images/rocket.webp"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.website}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Website Live</p>
        </div>
      </div>
      </div>
    </div>
      
      
      </>
  );
};

export default About;
