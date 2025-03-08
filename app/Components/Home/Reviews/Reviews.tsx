import React from 'react'
import Slider from './Slider'

const Reviews = () => {
  return (
    <>
    <div className='pt-15 pb-15 bg-[#050709]'>
    <div className="flex justify-center text-white">
        <h2 className="about-heading bg-heading">
          Client <span style={{ color: "blue", fontSize: "35px" }}>R</span>eviews
        </h2>
      </div> 
    <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
        <Slider/>
    </div>  
    </div>
    </>

  )
}

export default Reviews
