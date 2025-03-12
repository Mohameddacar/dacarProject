import React from 'react'

const Lists = ({text,className}) => {
  return (
    <div>
        <li className={`text-lg text-primary font-normal font-jost list-none hover:text-secondary duration-300 cursor-pointer ${className}`}>{text}</li>
    </div>
  )
}

export default Lists