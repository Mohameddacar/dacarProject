import React from 'react'
import Image from './Image'
import serviceImageOne from '../../public/icon1.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({src,title,body}) => {
  return (
    
    <div className='group w-[370px] shadow-2xl py-[50px] pl-[30px]'>
        <Image src={src}/>
        <h2 className='text-2xl font-voll font-extrabold pt-[26px] pb-[15px] text-[#00413D]' >{title}</h2>
        <p className='text-lg font-voll font-normal text-[#00413D] w-[295px] pb-[30px]'>{body}</p>
        <FaLongArrowAltRight className='group-hover:text-red-500 text-2xl'/>
    </div>
  )
}

export default ServiceCard