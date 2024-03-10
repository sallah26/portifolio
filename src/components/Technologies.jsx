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
import html_img11 from "../assets/images/tech-images/Canva-logo-500x281-removebg-preview.png"
import html_img12 from "../assets/images/tech-images/Adobe-Photoshop-Logo-2019-2020-removebg-preview.png"
import html_img13 from "../assets/images/tech-images/adobe-xd-logo-64364E3A24-seeklogo.com-removebg-preview.png"


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
    },{
      id: 11,
      img: html_img11,
    },{
      id: 12,
      img: html_img12,
    },{
      id: 13,
      img: html_img13,
    },
  ]
 
  return (
    <section id='technologies' className='tech-bg flex flex-col items-center justify-center gap-3 p-4 text-lg m-2 my-10 mt-4 lg:gap-6 py-5 lg:py-20 text-center'>
      <div className='w-full lg:w-55'>
        <p className='text-3xl lg:5xl font-semibold'>What Technologies I Use?</p>
        <p className='text-md lg:text-lg'>As you can see below my toolkit includes a range of languages, frameworks, and tools, ensuring versatility and excellence in every project.</p>
      </div>
      <div className='flex  flex-wrap gap-10 justify-center max-w-[1100px]'>
        {TechsImage.map((tech)=> {
          return (
            <div key={tech.id} className='w-16 md:w-20 flex items-center justify-center'>
              <img src={tech.img} alt={tech.img} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Technologies
