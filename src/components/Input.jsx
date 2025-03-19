import React from 'react'

const Input = ({placeholder}) => {
  return (
    <input className='my-12 w-[45%] pb-2 border-[#00413d1a] border-b placeholder:text-[-' placeholder={placeholder} type="text" />
               
  )
}

export default Input