import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
        <button className={`relative after:absolute after:top-[5px] after:left-[5px] after:w-[92%] md:after:w-[95%] md:after:h-[87%] after:h-[82%] after:border-white  after:border after:content-[""] py-6 px-11 bg-secondary text-lg text-white font-medium font-jost ${className}`}>{text}</button>
    </div>
  )
}

export default Button