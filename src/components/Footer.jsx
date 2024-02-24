import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { IoTelescope } from 'react-icons/io5'
import logo from "../assets/images/s-logo.png";

const Footer = () => {
  return (
    <footer className='min-w-full flex flex-col items-center justify-center p-4 m-0  bg-zinc-200 dark:bg-[#2a3030] border-0 border-t-[3px] border-slate-600 shadow-inner shadow-slate-500 dark:shadow-slate-500'> 
      
      <div className=' pt-10  flex flex-col md:flex-row gap-2 items-center md:gap-4  justify-between lg:w-[1000px]'>
        <div className='flex items-center'>
            <img src={logo} className='w-28 ' alt="s-logo" />
        </div>
        <div className='flex flex-col text-lg items-center justify-between font-semibold'>
            <p>selahadinhamid26@gmail.com</p>
            <p>+251-926-378-367</p>
            <p>Adama, Ethiopia</p>
            
        </div>
            <div className='flex gap-3 items-center pl-4'>
                <a href="" className='p-1 bg-slate-600 rounded-sm hover:bg-blue-500 text-white'>
                    <CiLinkedin size={30}/>
                </a>
                <a href="" className='p-1 bg-slate-600 rounded-sm hover:bg-blue-500 text-white'>
                    <CiLinkedin size={30}/>
                </a>
                <a href="" className='p-1 bg-slate-600 rounded-sm hover:bg-blue-500 text-white'>
                    <CiLinkedin size={30}/>
                </a>
                
            </div>

      
      </div>
      {/* <div className="flex  pt-2 "> */}
      <p className=' font-light pt-5'>
        ©Copyright 2024 Selahadin H. 
      </p>
      {/* </div> */}
    </footer>
  )
}

export default Footer
