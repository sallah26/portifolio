import React, { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import { Link as ScrollLink } from 'react-scroll';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DarkModeToggle from './DarkMode';
import s_logo from "../assets/images/s-logo.png"
import Button from './Button';
// import IoIosArrowDropright from "react-icons/io"
// import { MdOutlineElectricalServices } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
// import FaUsersGear from "react-icons/fa";
// import FaUsersGear from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    AOS.init({
        once: false 
    });
}, []); 
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  let menuRef = useRef();


  
  useEffect(() => {
  
          document.addEventListener("mousedown", (e)=>{
            if(!menuRef.current.contains(e.target)){
              setIsOpen(true)}}); 
             }
          );
  

  return (
    <header ref={menuRef} className='text-md py-10 md:py-2 pt-5'>
      <div className=" mx-auto flex items-center max-w-[1182px] justify-between p-1 pb-9 lg:pb-2">
        <div data-aos="fade-down" data-aos-delay="200" className=" ">
          <img src={s_logo} alt="jifar logo" className='w-12'/>
        </div>
        {/* Large devices */}
        <nav className="hidden lg:flex items-center space-x-7 text-md">
          <ScrollLink
            to="services"
            href=''
          
            spy={true}
            smooth={true}
            offset={70}
            duration={500}
            className="hover:text-gray-400 hover:underline hover:underline-offset-8 "
            data-aos="fade-down" 
            data-aos-delay="200"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="experience"
            href=''
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:text-gray-400 hover:underline hover:underline-offset-8"
            data-aos="fade-down" 
            data-aos-delay="300"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="products"
            href=''
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400 hover:underline hover:underline-offset-8"
            data-aos="fade-down" 
            data-aos-delay="400"
          >
            Products
          </ScrollLink>
          <ScrollLink
            to="contact"
            href=''
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:text-gray-400 hover:underline hover:underline-offset-8"
            data-aos="fade-down" 
            data-aos-delay="500"
          >
            Contact
          </ScrollLink>
         
          
        </nav>

        <div className=' z-40 flex gap-2 lg:gap-4 items-center justify-center'>
            <div className='mt-1.5'>
                <DarkModeToggle />
            </div>
            <div className="z-30 lg:hidden cursor-pointer" onClick={toggleNavbar}>
                <HiOutlineMenuAlt2 size={27} />
          </div>
          <div>
          <ScrollLink
            to="contact"
            href=''
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=""
            data-aos="fade-down" 
            data-aos-delay="500"
          >
            {/* Contact */}
           <Button name={"Contact Me"} />
          </ScrollLink>
          </div>
        </div>

        {/* Small devices */}
        {/* Sidebar for small devices */ }
        <article className={`lg:hidden fixed z-50 top-0 -left-1/2 h-screen w-1/2 bg-zinc-300 dark:text-white dark:bg-neutral-900 py-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col'>
            <div className="flex justify-start mt-3">
              <img src={s_logo} className='w-32' alt="Jifar's logo" />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-6 right-2 opacity-70"
              >
                {/* <IoIosArrowDropright size={30} color='#ED7D31' /> */}
              </button>
            </div>
            <div>
              <ul className="flex flex-col text-lg items-start mt-7">
                <li className="w-full border-b-2  hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400  hover:cursor-pointer ">
                  <ScrollLink
                    to="services"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-3 py-2 flex gap-2 hover:translate-x-3 duration-150 items-center "
                    onClick={() => { toggleNavbar(); }}
                      >
                        {/* <MdOutlineElectricalServices size={20}/> */}
                    Services
                  </ScrollLink>
                </li>
                <li className="w-full  border-b-2 hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400 hover:cursor-pointer">
                  <ScrollLink
                    to="experience"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="px-3 py-2 flex gap-2 items-center hover:translate-x-3 duration-150"
                    onClick={() => { toggleNavbar(); }}
                      >
                        {/* <IoHome size={20}/> */}
                        Experience
                  </ScrollLink>
                </li>
                <li className="w-full  border-b-2 hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400 hover:cursor-pointer">
                  <ScrollLink
                    to="products"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-3 py-2 flex gap-2 items-center hover:translate-x-3 duration-150"
                    onClick={() => { toggleNavbar(); }}
                      >
                        {/* <FaUsersGear size={20}/> */}
                        Products
                  </ScrollLink>
                </li>
                <li className="w-full  border-b-2 hover:border-slate-900 border-slate-400 dark:border-slate-700  dark:hover:border-slate-400 hover:cursor-pointer">
                  <ScrollLink
                    to="contact"
                    href=''
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-3 py-2 flex gap-2 items-center hover:translate-x-3 duration-150"
                    onClick={() => { toggleNavbar(); }}
                      >
                        {/* <FaUsersGear size={20}/> */}
                        Contact
                  </ScrollLink>
                </li>
                
              </ul>
              
            </div>
          </div>
        </article>
      </div>
    </header>
  );
};

export default Navbar;