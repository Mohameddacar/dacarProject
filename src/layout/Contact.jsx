import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ContactImage from '../assets/contact.png'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'



const Contact = () => {
  return (
    <section className='py-[120px]'>
        <Container>
            <Flex>
                <div className='w-5/12'>
                <Image src={ContactImage}/>
                </div>
                <div className='w-7/12'>
                <SubHeading className='!text-left !mb-[10px]'  text='Get In Touch'/>
                <Heading  className='!text-left' text='Feel Free to Contact'/>
                <Flex className='flex-wrap justify-between'>
                    <Input placeholder='Enter Name'/>
                    <Input placeholder='Enter Email'/>
                    <Input placeholder='Enter Phone'/>
                    <Input placeholder='Enter Subject'/>
                    <Input placeholder='Enter Message'/>
                </Flex>
                <Button className='' text='Contact Us' />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact