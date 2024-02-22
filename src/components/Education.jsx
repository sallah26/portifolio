import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

const Education = () => {
    const EducationData = [
        {
            id: 0,
            title: "Software Engineering Student",
            description: "Currently pursuing a degree in Software Engineering at ASTU (Adama Science and Technology University), Adama Ethiopia",
            time: "March 2021 - Present",
            place: "At Adama, Ethiopia",
        },
        {
            id: 1,
            title: "Intern Website Developer",
            description: "Assisted the web design and development team in creating responsive and user-friendly websites. I have developed full-stack music streaming and sharing web app",
            time: "March 2021 - Present",
            place: "At Adama, Ethiopia",
        },
        {
            id: 2,
            title: "Freelance Projects",
            description: "Worked on various graphic design projects and built websites, creating visually appealing designs and functional digital solutions",
            time: "March 2021 - Present",
            place: "In-person & Remote",
        },
        {
            id: 0,
            title: "Highschool and Preparatory",
            description: "Attended both my Secondary and Preparatory School at, Silte-Tora Ethiopia.",
            time: "March 2021 - Present",
            place: "At Silte-Tora, Ethiopia",
        },
    ]
  return (
    <section className='px-3 lg:px-10 py-10 lg:py-20'>
      <p className='text-3xl font-semibold text-center p-4 pb-6'>Education & Work Experience</p>
      <div className='flex flex-wrap  items-center justify-center'>
        {EducationData.map((data) => {
            return(
                <div key={data.id} className='w-full lg:w-2/5  gap-1 flex flex-col border-[1px] p-5 border-slate-400 bg-stone-100 rounded-lg shadow-[#73b6b4] shadow-md mb-6 mr-6'>
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
