import React from 'react'
import profile_image from "../assets/images/Pro-Fom-PS.png";
import Button from './Button';

const Hero = () => {
  return (
    <section className=''>
      <div className='flex flex-col gap-4 lg:gap-7 lg:flex-row justify-center items-center py-7 lg:py-16 bg-white dark:bg-stone-800 text-black dark:text-stone-50'>
        <div className='w-full lg:w-2/5 gap-3 flex flex-col'>
            <p className='text-lg font-semibold lg:text-2xl'>Hello I'm</p>
            <p className='my-name text-3xl  lg:text-5xl space-x-2 text-teal-600'>Selahadin Hamid</p>
            <p className='text-lg w-full '>Hello👋! I'm Selahadin Hamid, a front-end developer with
                a year of hands-on experience. I bring design visions to life,
                creating eye-catching banners, captivating cards, and
                distinctive logos, with expertise in web design for seamless
                online experiences.
            </p>
            <div className='flex gap-4 font-semibold' >
                <Button name={"Download Resume"}/>
                <Button name={"Hire Me"}/>
            </div>
        </div>
        <div>
            <img src={profile_image} alt="profile image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
