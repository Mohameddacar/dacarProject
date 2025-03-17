import  Container from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import Lists from '../components/Lists'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
const Navber = () => {
  return (
    <section className='py-[18px]'>
        <Container>
                <Flex className='items-center'>
                <div  className='w-3/12'>
                <Image src={Logo}/>
                </div>
                <div  className='w-6/12 justify-center'>
                <ul className='flex gap-x-12'>
                  <Link to='/'><Lists text='Home' /></Link>
                  <Link to='/about'><Lists text='About' /></Link>
                  <Link to='/services'><Lists text='Services' /></Link>
                  <Link to='/blog'><Lists text='Blog' /></Link>
                  <Link to='/contact'><Lists text='Contact' /></Link>              
                </ul>
                </div>
                <div  className='w-3/12 text-end'>
                <Link to='/about'><Button text="Download CV" /></Link>
                
                </div>
                </Flex>
        </Container>
        </section>
  )
}

export default Navber