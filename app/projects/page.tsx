import { projectsInfo } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <>
    <div className="pt-23 pb-18 bg-[#ececec] text-white">
      <div data-aos="fade-up" className="flex justify-center">
        <h2 className="about-heading bg-heading">
          My <span style={{ color: "blue", fontSize: "35px" }}>P</span>rojects
        </h2>
      </div>
       <div className="text-black w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {
            projectsInfo.map((project)=>{
               return <div data-aos="flip-right"
               data-aos-offset="300"
               data-aos-easing="ease-in-sine" key={project.id} className="s-dow bg--950 p-2 rounded-lg ">
                <Link href={project.url} target="_blank">
                   <Image src={project.image} alt="project" className="w-full rounded-lg" width={300} height={200}/>
                   <h2 className="text-center pt-3">{project.name}</h2>
                   <h2 className="text-center ">Live ↗️</h2>
                </Link>

               </div>
            })
          }
       </div>

    </div>
    </>
  );
};

export default Project;
