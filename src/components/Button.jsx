import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-myMain rounded-full border-4 py-1.5 px-4 lg:px-6 text-white border-slate-800 '>
      {props.name}
    </button>
  )
}

export default Button
