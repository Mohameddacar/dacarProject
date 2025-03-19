import React from 'react'
import Image from '../components/Image'
import Avator from '../assets/clientAvator.png'
import { IoMdStar } from 'react-icons/io'
import Flex from '../components/Flex'


const ClientSecondCard = () => {
  return (
    <Flex className='pt-10 items-center gap-x-[30px]'>
        <Image src={Avator} />
        <div>
        <h3 className='text-[#00413D] text-xl font-voll font-semibold'>Michale Doie</h3>
        <p className='text-[#00413D] text-sm font-jost font-normal pt-[5px] pb-3'>Product Designer</p>
        <Flex>
        <ul><li><IoMdStar className='text-[#FF9F3F] text-xx'/></li></ul>
        <ul><li><IoMdStar className='text-[#FF9F3F] text-xx'/></li></ul>
        <ul><li><IoMdStar className='text-[#FF9F3F] text-xx'/></li></ul>
        <ul><li><IoMdStar className='text-[#FF9F3F] text-xx'/></li></ul>
        <ul><li><IoMdStar className='text-[#FF9F3F] text-xx'/></li></ul>
        </Flex>
        </div>
    </Flex>
  )
}

export default ClientSecondCard