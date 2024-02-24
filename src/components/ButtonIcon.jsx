import React from 'react'
import { HiArrowDown, HiArrowUp } from 'react-icons/hi'
import { MdFastForward } from 'react-icons/md'

const ButtonIcon = (props) => {
  return (
    <button className='font-semibold bg-myMain justify-center flex gap-2 items-center rounded-full border-4 py-1.5 px-4 lg:px-6 text-white border-slate-800 '>
      {props.name}{" "}{props.icon ? <HiArrowUp /> : <HiArrowDown />} 
    </button>
  )
}

export default ButtonIcon
