import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

const Education = () => {
    const EducationData = [
        {
            id: 0,
            title: "Software Engineering Student",
            description: "Currently pursuing a degree Program in Software Engineering at ASTU (Adama Science and Technology University), Adama Ethiopia",
            time: "June 2021 - Present",
            place: "At Adama, Ethiopia",
        },
        {
            id: 1,
            title: "Intern Website Developer",
            description: "Assisted the web design and development team in creating responsive and user-friendly websites. I have developed full-stack music streaming and sharing web app",
            time: "july 2023 - oct 2023",
            place: "At Adama, Ethiopia",
        },
        {
            id: 2,
            title: "Freelance Projects",
            description: "Worked on various graphic design projects and built websites, creating visually appealing designs and functional digital solutions",
            time: "March 2022 - Present",
            place: "In-person & Remote",
        },
        {
            id: 0,
            title: "Highschool and Preparatory",
            description: "Attended both my Secondary and Preparatory School in Tora Secondary School at, Silte-Tora Ethiopia.",
            time: "Sept 2016 - April 2021",
            place: "At Silte-Tora, Ethiopia",
        },
    ]
  return (
    <section id='experience' className='text-lg px-3 lg:px-10 py-0 lg:py-7 '>
      <p className='text-3xl font-semibold text-center p-4 pb-6'>Education & Work Experience</p>
      <div className='flex flex-wrap  items-center justify-center'>
        {EducationData.map((data) => {
            return(
                <div key={data.id} className='w-full lg:w-2/5  gap-1 flex flex-col border-[1px] p-5 border-slate-400 dark:border-slate-500 bg-stone-100 dark:bg-slate-700 dark:text-slate-200 rounded-lg shadow-[#73b6b4] dark:shadow-[#80e4e0] shadow-md hover:shadow-[#78d3d0] hover:shadow-lg duration-300 mb-6 mr-6'>
                    <div className='flex gap-1 items-center font-semibold'>
                        <IoCalendarOutline size={17}/><p className='text-sm'>{data.time}</p>
                    </div>
                    <p className='text-2xl lg:text-2xl font-semibold'>{data.title}</p>
                    <div className='flex gap-1 items-center font-semibold'>
                        <CiLocationOn size={18}/><p className='text-sm'>{data.place}</p>
                    </div>
                    <p className=''>{data.description}</p>
                </div>
            )
        })}

      </div>
    </section>
  )
}

export default Education

