import React, { useState } from 'react'
import profile_image from "../assets/images/Pro-Fom-PS.png";
import Button from './Button';

const Hero = () => {
  const onButtonClick = () => {
    // Use relative path to the PDF file
    const pdfPath = "/SamplePDF.pdf";
    const pdfUrl = process.env.PUBLIC_URL + pdfPath;

    // Using fetch to download the PDF file
    fetch(pdfUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const fileURL = window.URL.createObjectURL(blob);

            // Creating new object of PDF file
            const link = document.createElement("a");
            link.href = fileURL;
            link.download = "SamplePDF.pdf";
            link.click();
        })
        .catch(error => {
            console.error('Error fetching the PDF file:', error);
        });
};
  return (
    <section className=''>
      <div className='flex flex-col gap-4 lg:gap-7 lg:flex-row justify-center items-center py-7 lg:py-16  bg-zinc-100 dark:bg-[#2a3030] rounded-2xl shadow-2xl dark:shadow-slate-500 border-[1.5px] border-slate-400 dark:border-slate-500   text-black dark:text-stone-50'>
        <div className='w-full lg:w-2/5 gap-3 flex flex-col p-4 lg:p-1'>
            <p className='text-xl font-semibold lg:text-2xl'>Hello I'm</p>
            <p className='my-name text-4xl  lg:text-5xl space-x-2 text-teal-500 dark:text-teal-400 '>Selahadin Hamid</p>
            <p className='text-lg w-full '>Hello👋! I'm Selahadin Hamid, a front-end developer with  
                a year of hands-on experience. I bring design visions to life,
                creating eye-catching banners, captivating cards, and
                distinctive logos, with expertise in transforming web designs into seamless
                executable front-end code.
            </p>
            <div className='flex gap-4 font-semibold' >
              <button onClick={onButtonClick}>
                <Button name={"Download Resume"} onClick={onButtonClick}/>
              </button>
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
