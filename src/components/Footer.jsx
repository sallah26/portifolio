import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { IoTelescope } from 'react-icons/io5'
import logo from "../assets/images/s-logo.png";

const Footer = () => {
  return (
    <footer className='min-w-full flex items-center justify-center p-4  bg-zinc-100 dark:bg-[#2a3030] border-[2px] shadow-2xl dark:shadow-slate-500'> 
      <div className='w-[1000px] pt-10  flex flex-col md:flex-row gap-2 md:gap-4 justify-between'>
        <div className='flex items-center'>
            <img src={logo} className='w-20' alt="s-logo" />
        </div>
        <div className='flex flex-col items-center font-semibold'>
            <p>selahadinhamid26@gmail.com</p>
            <p>+251-926-378-367</p>
            <p>Adama, Ethiopia</p>
        </div>
            <div className='flex gap-3 items-center'>
                <a href="" className='p-1 bg-slate-800 rounded-sm text-white'>
                    <CiLinkedin size={30}/>
                </a>
                <a href="" className='p-1 bg-slate-800 rounded-sm text-white'>
                    <CiLinkedin size={30}/>
                </a>
                <a href="" className='p-1 bg-slate-800 rounded-sm text-white'>
                    <CiLinkedin size={30}/>
                </a>
                
            </div>

      </div>
    </footer>
  )
}

export default Footer
