import React from 'react'
import html_img from "../assets/images/tech-images/tailwindcss-icon.svg"
import html_img1 from "../assets/images/tech-images/bootstrap-stack.png"
import html_img2 from "../assets/images/tech-images/javascript-js.svg"
import html_img3 from "../assets/images/tech-images/react-javascript-js-framework-facebook.svg"
import html_img4 from "../assets/images/tech-images/nextjs.svg"
import html_img5 from "../assets/images/tech-images/nodejs.svg"
import html_img6 from "../assets/images/tech-images/express-original.svg"
import html_img7 from "../assets/images/tech-images/mongodb-original-wordmark.svg"
import html_img8 from "../assets/images/tech-images/file-type-firebase.svg"
import html_img9 from "../assets/images/tech-images/file-type-git.svg"
import html_img0 from "../assets/images/tech-images/github.svg"

const Technologies = () => {
  const TechsImage = [
    {
      id: 0,
      img: html_img,
    },
    {
      id: 1,
      img: html_img1,
    },
    {
      id: 2,
      img: html_img2,
    },{
      id: 3,
      img: html_img3,
    },{
      id: 4,
      img: html_img4,
    },{
      id: 5,
      img: html_img5,
    },
    {
      id: 6,
      img: html_img6,
    },
    {
      id: 7,
      img: html_img7,
    },
    {
      id: 8,
      img: html_img8,
    },{
      id: 9,
      img: html_img9,
    },{
      id: 10,
      img: html_img0,
    },
  ]
   
  return (
    <section id='technologies' className='bg-sky-800 border-[2px] bg-opacity-90 border-slate-400 flex flex-col items-center justify-center gap-3 p-4 text-lg lg:gap-6 py-5 lg:py-20 text-center'>
      <div className='w-full lg:w-55'>
        <p className='text-3xl lg:5xl font-semibold'>What Technologies I Use?</p>
        <p className='text-md lg:text-lg'>Transforming ideas into captivating digital realities through web design and development expertise, creating seamless and visually stunning digital experiences</p>
      </div>
      <div className='flex  flex-wrap gap-10 justify-center max-w-[1100px]'>
        {TechsImage.map((tech)=> {
          return (
            <div key={tech.id} className='w-10 md:w-20 flex items-center justify-center'>
              <img src={tech.img} alt={tech.img} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Technologies
