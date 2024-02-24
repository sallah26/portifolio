import React from 'react'
import img from "../assets/images/Selahadin_portifolio.png"
import Button from './Button'
import { MdFastForward } from 'react-icons/md'

const Achievements = () => {
  const ProductsData = [
    {
        id: 0,
        title: "Website developed for jifar Agency",
        link: "https://jifarhomes.com",
    },
    {
        id: 1,
        title: "Website developed for jifar Agency",
        link: "https://jifarhomes.com",
    },
    {
        id: 2,
        title: "Website developed for jifar Agency",
        link: "https://jifarhomes.com",
    },
    {
        id: 3,
        title: "Website developed for jifar Agency",
        link: "https://jifarhomes.com",
    },{
      id: 4,
      title: "Website developed for jifar Agency",
        link: "https://jifarhomes.com",
  },{
    id: 5,
    title: "Website developed for jifar Agency",
        link: "https://jifarhomes.com",
},{
  id: 6,
  title: "Website developed for jifar Agency",
  link: "https://jifarhomes.com",
},
]
  return (
    <section className='flex flex-col items-center justify-center text-center py-10'>
        <div className='w-full lg:w-[670px] py-10'>
        <p className='text-3xl lg:5xl font-semibold'>Get a Snapshot of My Achievements...</p>
        <p className='text-md lg:text-lg'>A visual journey through impactful projects, innovative solutions, and the creative prowess that defines my digital portfolio.</p>
      </div>
      <div className="flex flex-wrap justify-center max-w-[1500px] gap-3">
          {ProductsData.map((product) => {
            return(
              <div key={product.id} className="shadow-lg shadow-teal-800 dark:shadow-teal-600 maindiv min-w-[200px] min-h-[300px]   flex flex-col w-full md:w-[45%] lg:w-[22%] m-4 md:m-1 gap-4 bg-slate-500 rounded-md border-[1.5px] border-teal-600">
                <img src={img} className='rounded-ss-md rounded-se-md' alt="product image" />
                <div className='flex flex-col p-2 text-md font-semibold'>
                  <div className="mainbtn">
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

      <div className='mt-10'>
        <Button name="Show more" icon={`${true}`}/>
      </div>
    
    </section>
  )
}

export default Achievements
