import Container from '../components/Container'
import Flex from '../components/Flex'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
import serviceImageOne from '../../public/icon1.png'
import serviceImageTwo from '../../public/mobileapp.png'
import serviceImageThree from '../../public/webdesign.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'

const ServicesLayout = () => {
  return (
    <section className='pt-[220px] pb-[120px]'>
        <Container>
            <SubHeading text="MY SERVICES" />
            <Heading text="Provide Wide Range of Digital Services" />
            <Flex className='justify-between pt-10'>
           <ServiceCard src={serviceImageOne} title="Ui/Ux Design" body="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
           <ServiceCard src={serviceImageTwo} title="Mobile Development" body="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
           <ServiceCard src={serviceImageThree} title="Web Design" body="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
            </Flex>
        </Container>

    </section>
  )
}

export default ServicesLayout