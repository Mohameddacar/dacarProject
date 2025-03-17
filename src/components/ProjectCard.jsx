import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'
import Image1 from '../assets/image.png'
import { FaArrowRightLong } from "react-icons/fa6";
const ProjectCard = ({text1,text2,text3,text4}) => {
  return (
    <div className='w-[370px]  shadow-2xl'>
        <Image src={Image1}/>
        <div className='p-[30px]'>
            <h6 className='text-base text-voll text-[#E5745D] font-medium pb-[10px]'>{text1}</h6>
            <h4 className='text-2xl text-voll text-[#00413D] font-medium pb-[10px]'>{text2}</h4>
            <p className='text-base text-jost text-[#00413D] font-medium pb-6'>{text3}</p>
           <Flex className='items-center text-lg text-[#00413D] font-voll font-medium gap-x-2'>
            <h5>{text4}</h5> <div><FaArrowRightLong className=''/></div>
            </Flex> 
        </div>
    </div>
  )
}

export default ProjectCard