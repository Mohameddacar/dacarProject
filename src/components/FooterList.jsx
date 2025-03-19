import React from 'react'

const FooterList = ({text,className}) => {
  return (
    <div><li className={`text-base text-white text-jost border-r border-white pr-[30px] ${className}`}>{text}</li></div>
  )
}

export default FooterList