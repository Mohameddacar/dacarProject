import Button from '../components/Button'
import Container from '../components/Container'
import React from 'react'
import BannerImage from '../assets/banner1.png'
import BannerImage1 from '../assets/banner2.jpeg'
const Banner = () => {
  return (
<section style={{backgroundImage: `url(${BannerImage})`}} className="group overflow-hidden z-10 relative w-full bg-banner bg-no-repeat bg-cover bg-center py-[100px] md:py-[221px] px-3 md:px-0">
<div style={{backgroundImage: `url(${BannerImage1})`}} className="group-hover:right-0 -z-10 absolute top-0 right-[-100%] w-6/12 h-full md:bg-banner2 bg-no-repeat bg-cover bg-center duration-500 hidden md:block"></div>
      <Container>
        <h1 className='text-4xl md:text-[100px] md:leading-[100px] sm:text-[60px] sm:leading-[80px] text-white font-bold font-voll'>Hello! <span className='block'>I’m Mohamed Dacar</span>
        </h1>
        <p className='pb-10 pt-4 text-xl text-[#ffffff80] font-normal font-jost opacity-50 w-auto  md:w-[670px] leading-8'>I’am freelance <span className='text-white'>Software Developer </span>
        based in Somalia, specializing in web, mobile, and custom software solutions. I create fast, scalable, and user-friendly applications to help businesses grow
        </p>
        <Button text='Contact Me' />
      </Container>
    </section>  
  )
}

export default Banner