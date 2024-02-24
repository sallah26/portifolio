import React from 'react'
import web_desining_img from "../assets/images/webdesigning.png";
import web_dev_img from "../assets/images/web-development (2).png";
import graphic_desining_img from "../assets/images/graphic-designing.png";
import consultancy_img from "../assets/images/consultancy (2).png";

const Services = () => {
    const ServicesData = [
        {
            id: 0,
            title: "Website Development",
            description: "Crafting dynamic and functional websites with cutting-edge technologies, ensuring a seamless user experience and optimal performance.",
            img: web_dev_img,
        },
        {
            id: 1,
            title: "Website Designing",
            description: "Crafting dynamic and functional websites with cutting-edge technologies, ensuring a seamless user experience and optimal performance.",
            img: web_desining_img,
        },
        {
            id: 2,
            title: "Graphics Designing",
            description: "Crafting dynamic and functional websites with cutting-edge technologies, ensuring a seamless user experience and optimal performance.",
            img: graphic_desining_img,
        },
        {
            id: 3,
            title: "Digital Consultancy",
            description: "Crafting dynamic and functional websites with cutting-edge technologies, ensuring a seamless user experience and optimal performance.",
            img: consultancy_img,
        },
    ]
  return (
    <section id='services' className='flex flex-col items-center justify-center gap-3 p-4 text-lg lg:gap-6 py-5 lg:py-20 text-center'>
      <div className='w-full lg:w-55'>
        <p className='text-3xl lg:5xl font-semibold'>What I Do?</p>
        <p className='text-md lg:text-lg'>Transforming ideas into captivating digital realities through web design and development expertise, creating seamless and visually stunning digital experiences</p>
      </div>
      <div className='flex  flex-wrap gap-5 justify-center '>
        {ServicesData.map((service) => {
            return(
                <div key={service.id} className="flex flex-col w-full md:w-1/2 lg:w-1/4 p-5 min-w-80 rounded-ee-[60px] rounded-ss-[60px] duration-100 hover:rounded-ss-none hover:rounded-ee-none hover:rounded-se-[60px] hover:rounded-bl-[60px] shadow-slate-600  border-teal-500 shadow-xl dark:shadow-slate-700  border-2">
                    <p className='text-xl font-semibold'>{service.title}</p>
                    <img src={service.img} alt={`${service.title} image`} />
                    <p>{service.description}</p>
                
                </div>
            )
        })}
      </div>
    </section>
  )
}

export default Services
