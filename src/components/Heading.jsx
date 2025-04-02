import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-center text-[50px] text-[#00413D] font-voll font-medium mx-auto pt-[20px] ${className}`}>{text}</h2>

  )
}

export default Heading