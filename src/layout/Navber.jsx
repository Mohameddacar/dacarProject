import  Container from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import Lists from '../components/Lists'
import Button from '../components/Button'
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
                <Lists text='Home' />
                <Lists text='Pages' />
                <Lists text='Services' />
                <Lists text='Blog' />
                <Lists text='Contact' />
                </ul>
                </div>
                <div  className='w-3/12 text-end'>
                <Button text="Download CV" />
                </div>
                </Flex>
        </Container>
        </section>
  )
}

export default Navber