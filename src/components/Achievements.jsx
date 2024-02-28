import React, { useState } from 'react';
import img from "../assets/images/Selahadin_portifolio.png";
import sShot1 from "../assets/images/Screenshot-jifar.png";
import sShot2 from "../assets/images/Screenshot-jifar-light.png";
import sShot3 from "../assets/images/Screenshot-portifolio-light.png";
import sShot4 from "../assets/images/Screenshot-portifolio.png";
import sShot5 from "../assets/images/Screenshot-demo.png";
import sShot6 from "../assets/images/Screenshot-demo-light.png";
import sShot7 from "../assets/images/Screenshot-afri-coffe.png";
import sShot8 from "../assets/images/Screenshot-manag.png";
import ButtonIcon from './ButtonIcon';
import Button from './Button';



const Achievements = () => {
  const [showMore, setShowMore] = useState(false);
  const handlShowMore = () => {
      setShowMore(!showMore);
  };

  const ProductsData = [
    {
        id: 0,
        title: "Website project developed for jifar Agency",
        image: localStorage.theme === "dark" ? sShot1 : sShot2,
        link: "https://jifarhomes.com",
    },
    {
        id: 1,
        title: "Website developed for Feature Digital Marketing Startup",
        image: localStorage.theme === "dark" ? sShot5 : sShot6,
        link: "https://project-marketing.vercel.app/",
    },
    {
        id: 2,
        title: "Website developed for Generative AI Hackathon Competition in Africa",
        image: sShot7,
        link: "https://afri-coffee.vercel.app/",
    },
    {
        id: 3,
        title: "My Portfolio Website developed for Business Aim",
        image: localStorage.theme === "dark" ? sShot4 : sShot3,
        link: "https://jifarhomes.com",
    },
]
const ProductsData2 = [
  {
      id: 0,
      title: "Landing page of developed for Simple tasks management",
      image: sShot8,
      link: "https://manage-app-selahadin.vercel.app/",
  },
  {
      id: 1,
      title: "Loding my works...",
      image: "../assets/images/Selahadin_portifolio.png",
      link: "https://jifarhomes.com",
  },
  {
      id: 2,
      title: "Loding my works...",
      image: "../assets/images/Selahadin_portifolio.png",
      link: "https://jifarhomes.com",
  },
]

// it 
//  provide 
  return (
    <section  className='flex flex-col items-center p-4 justify-center text-center py-10 pb-20'>
        <div id='products' className='w-full lg:w-[670px] py-10'>
        <p className='text-3xl lg:5xl font-semibold'>Get a Snapshot of My Achievements...</p>
        <p className='text-md lg:text-lg'>A visual journey through impactful projects, innovative solutions, and the creative prowess that defines my digital portfolio.</p>
      </div>
      <div  className={`${showMore ? "open" : ""} content-container flex flex-wrap justify-center max-w-[1500px] md:gap-3`}>
          {ProductsData.map((product) => {
            return(
              <div key={product.id} className="my-3 shadow-lg shadow-teal-800 dark:shadow-teal-600 maindiv  w-full h-[300px]    flex flex-col  md:w-[45%] lg:w-[22%] m-7 md:m-1 gap-0 bg-slate-500 rounded-md border-[1.5px] border-teal-600">
                <img src={product.image} className='rounded-ss-md rounded-se-md' alt="product image" />
                <div className='flex flex-col p-2 text-md font-semibold'>
                  <div className="mainbtn flex justify-center">
                    <a href={product.link}>
                      <Button name="Preview Product"/>
                    </a>
                  </div>
                  {/* <button className='mainbtn text-blue-700 text-md'></button> */}
                  <p className='mt-1'>{product.title}</p>
                  
                </div>
                <div className='overl'>
                </div>
              </div>
            )
          })

          }


      <div className='hidden-container'>
     {/*  */}
      <div className={` flex flex-wrap justify-center max-w-[1500px] md:gap-3`}>
          {ProductsData2.map((product) => {
            return(
              <div key={product.id} className="my-3 shadow-lg shadow-teal-800 dark:shadow-teal-600 maindiv  w-full h-[300px]    flex flex-col  md:w-[45%] lg:w-[22%] m-7 md:m-1 gap-0 bg-slate-500 rounded-md border-[1.5px] border-teal-600">
                <img src={product.image} className='rounded-ss-md rounded-se-md' alt="product image" />
                <div className='flex flex-col p-2 text-md font-semibold'>
                  <div className="mainbtn flex justify-center">
                  <Button name="Preview Product"/>
                  </div>
                  {/* <button className='mainbtn text-blue-700 text-md'></button> */}
                  <p>{product.title}</p>
                  
                </div>
                <div className='overl'>
                </div>
              </div>
            )
          })

          }

      </div>
      {/*  */}
      </div>
      </div>
      <button className='mt-10 duration-[3s]' onClick={handlShowMore}>
        
        {/* <HiArrowNarrowDown /> */}
        
        <ButtonIcon name={`${showMore ? "Show Less"  : "Show More"}`} icon={showMore}/>
      </button>
      
    </section>
  )
}

export default Achievements
