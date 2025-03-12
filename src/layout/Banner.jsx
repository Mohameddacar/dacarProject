import Button from '../components/Button'
import Container from '../components/Container'
import React from 'react'

const Banner = () => {
  return (
<section className="group overflow-hidden z-10 relative w-full bg-banner bg-no-repeat bg-cover bg-center py-[221px]">
<div className="group-hover:right-0 -z-10 absolute top-0 right-[-100%] w-6/12 h-full bg-banner2 bg-no-repeat bg-cover bg-center duration-500"></div>
      <Container>
        <h1 className='text-[100px] text-white font-bold font-voll'>Hello! <span className='block'>I’m Zarror Nibors</span>
        </h1>
        <p className='pb-10 pt-4 text-xl text-[#ffffff80] font-normal font-jost opacity-50 w-[580px] leading-8'>I’am freelance <span className='text-white'>UI/UX Desogner </span>
         based in Indonesia who loves to craft attractive design experiences for the web.
        </p>
        <Button text='Contact Me' />
      </Container>
    </section>  
  )
}

export default Banner