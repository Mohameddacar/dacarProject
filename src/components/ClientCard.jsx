import React from 'react'
import Image from '../components/Image'
import vector from '../assets/client.png'
const ClientCard = () => {
  return (
    <div>
        <div className='relative w-[570px] border-t-[8px] border-[#E5745D] shadow-md bg-white'>
            <Image className='absolute -bottom-[30px] left-[90px]' src={vector} />
            <p className='py-[30px] px-10 text-base text-[#00413D] font-jost font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry.</p>
        </div>
        
    </div>
  )
}

export default ClientCard