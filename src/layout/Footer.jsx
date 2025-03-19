import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import foot from '../assets/footer.png'
import FooterList from '../components/FooterList'
import Flex from '../components/Flex'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='pt-20 pb-10 bg-[#00413D]' >
        <Container>
            <div>
                <Image className='mx-auto' src={foot}/>
            </div>
            
            <ul>
            <Flex className='flex gap-x-6 justify-center py-[60px]'>
              <FooterList text='Home' />
              <FooterList text='About' />
              <FooterList text='Services' />
              <FooterList text='Portflio' /> 
              <FooterList text='Blog' />
              <FooterList className='!border-0' text='Contact' />
              </Flex>
            </ul>
            <ul className='flex justify-center gap-x-8 border-b border-white pb-[60px]'>
                <li className='w-[40px] h-[40px] bg-red-500 rounded-full flex justify-center items-center text-white'><FaLinkedinIn /></li>
                <li className='w-[40px] h-[40px] bg-red-500 rounded-full flex justify-center items-center text-white'><FaFacebookF /></li>
                <li className='w-[40px] h-[40px] bg-red-500 rounded-full flex justify-center items-center text-white'><FaTwitter /></li>
            </ul>
            <p className='text-center text-normal text-white font-jost pt-10'>Copyright © 2025 Design By Eng Dacar. All rights reserved.</p>
        </Container>
    </section>
  )
}

export default Footer