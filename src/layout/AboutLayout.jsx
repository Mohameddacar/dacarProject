import React from 'react'
import Container from '../components/Container'
import Flex    from '../components/Flex'
import Image from '../components/Image'
import About1 from '../assets/About1.png'
import About2 from '../assets/About2.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'
const AboutLayout = () => {
  return (
    <section className='py-[80px]'>
        <Container>
               <Flex>
               <div className='w-1/2'>
                <Flex className='justify-between'>
                <Image src={About1} />
               <div>
                <Image className='pb-[30px]' src={About2} />
                <Image src={About2} />
                </div>
                </Flex>
               </div>
               
               <div className='w-1/2 ' >
               <div className='px-[30px]'>
               <SubHeading className='!text-left' text="About Me"/>
               <Heading className='!text-left !w-[570px]' text="I Enjoy Solving Problems With Scalable Solutions"/>
               <p className='pt-[4px] pb-[20px] text-base font-jost font-normal text-[#00413D]'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, sed quia non numquam eius modi tempora 
                incidunt lao magnam aliquam quaerat voluptatem reprehenderit.</p>
                <p className='pb-[30px] text-base font-jost font-normal text-[#00413D]' >Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem reprehenderit non numquam eius.</p>
                <Button text='Download CV'/>
               </div>
               
               </div>
               </Flex>
        </Container>
    </section>
  )
}

export default AboutLayout