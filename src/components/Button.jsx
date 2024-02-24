import React from 'react'
import { MdFastForward } from 'react-icons/md'

const Button = (props) => {
  return (
    <button className='bg-myMain justify-center flex gap-2 items-center rounded-full border-4 py-1.5 px-4 lg:px-6 text-white border-slate-800 '>
      {props.name} {props.icon ? <MdFastForward /> : ""}
    </button>
  )
}

export default Button
