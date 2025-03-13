import React from 'react'

const Progressbar = ({percent,text}) => {
  return (
    <>
   <div className='w-[270px] h-[282px] shadow-xl flex flex-col justify-center items-center gap-y-6'>
   <div className='w-[167px] h-[167px] border-[#E5745D] border-[10px] rounded-full text-[34px] text-[#E5745D] font-voll font-semibold flex justify-center items-center '>{percent}%
</div>
<h3 className='text-[26px] text-[#00413D] font-voll font-semibold'>{text}</h3>
   </div>
  
   </>
  )
}

export default Progressbar