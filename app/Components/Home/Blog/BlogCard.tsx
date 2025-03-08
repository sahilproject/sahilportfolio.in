import Image from 'next/image';
import React from 'react'

type props={
    blog: {
        id: number;
        title: string;
        summary: string;
        image: string;
    }
}

const BlogCard = ({blog}:props) => {
  return (
    <div className='bg-indigo-950 rounded-md overflow-hidden' data-aos="zoom-in">
        <Image src={blog.image} alt={blog.title} width={300} height={300} className='w-full h-[250px] object-cover'/>
      <div className='p-6'>
         <p className='rounded-sm px-6 py-1.5 bg-rose-500 text-white w-fit '>
            News
         </p>
         <h1 className='sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 
         mt-6 mb-2 text-gray-200 leading-[1.5rem] font-bold'>{blog.title}</h1>
         <p className='text-sm font-semobold text-opacity-70 text-gray-400'>{blog.summary}</p>
        <button className='hover:underline cursor-pointer text-white pt-3 '>Read more</button>
      </div>
    </div>
  )
}

export default BlogCard
