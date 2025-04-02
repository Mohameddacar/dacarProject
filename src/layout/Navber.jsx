import  Container from '../components/Container'
import React, { useState } from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import Lists from '../components/Lists'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
const Navber = () => {

  let [open,setOpen] = useState(false);
  let handleClick = ()=>{
    setOpen(!open)

  }
  return (
    <>
    {/* Desktop Design Start */}
    <nav className='hidden md:block py-[18px]'>
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
        </nav>
     {/* Desktop Design ends  */}


    {/* Mobile Design Start*/}

    <nav className='relative block md:hidden px-3 py-5'>
        <Flex className='items-center justify-between'>
        <div><Image src={Logo}/></div>
        <div onClick={handleClick}>
          {
            open ?<ImCross /> : <FaBars />
          }</div>
        </Flex>
        {
          open && <ul className={`absolute top-[78px] right-0 z-40 w-full bg-blue-500 flex flex-col justify-center items-center py-14 gap-y-12 font-pop font-semibold text-white text-lg transition-all duration-300 transform w-2/3 h-screen ${open? 'translate-x-0':'translate-x-full'}`}>
          <li>Home</li> 
          <li>Service</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        }
        </nav>

    {/* Mobile Design ends*/}
    </>
  )
}

export default Navber