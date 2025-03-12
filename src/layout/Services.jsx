import Container from '../components/Container'
import Flex from '../components/Flex'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
import serviceImageOne from '../../public/icon1.png'
import serviceImageTwo from '../../public/mobileapp.png'
import serviceImageThree from '../../public/webdesign.png'

const Services = () => {
  return (
    <section className='pt-[220px] pb-[120px]'>
        <Container>
            <h4 className='text-center text-[50px] text-[#E5745D] font-voll font-medium'>MY SERVICES</h4>
            <h2 className='text-center text-[50px] text-[#00413D] font-voll font-medium w-[522px] mx-auto pt-[20px]'>Provide Wide Range of Digital Services</h2>

            <Flex className='justify-between pt-10'>
           <ServiceCard src={serviceImageOne} title="Ui/Ux Design" body="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
           <ServiceCard src={serviceImageTwo} title="Mobile Development" body="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
           <ServiceCard src={serviceImageThree} title="Web Design" body="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
            </Flex>
        </Container>

    </section>
  )
}

export default Services