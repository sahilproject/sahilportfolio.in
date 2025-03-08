import { servicesInfo } from '@/Data/data'
import ServiceCard from "../Services/ServiceCard"


const Services = () => {
  return (
    <>
    <div className='pt-14 pb-14 bg-[#0f0715] text-white'>
      <div className="flex justify-center ">
        <h2 className="about-heading bg-heading">
          <span style={{color:"blue",fontSize:"36px"}}>S</span>ervices
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-14'>
        {
            servicesInfo.map((service)=>{
                return <div key={service.id}>
                    <ServiceCard service={service}/>
                </div>
            })
        }
      </div>

    </div>
    </>
  )
}

export default Services
