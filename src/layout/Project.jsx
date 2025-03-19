import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'

const Project = () => {
  return (
    <section className='py-[120px] !pb-[20px]'>
        <Container>
            <Flex className='justify-between items-center'>
                <div>
                    <Heading  className='!text-left' text='Recent Projects'/>
                    <SubHeading className='!text-left' text='My Recent Projects'/>
                </div>
                
                <Flex className='gap-x-5'>
                <div className='group p-[15px] border border-black hover:bg-[#E5745D] duration-500 hover:border-transparent'><GoArrowLeft  className='text-black group-hover:text-white'/></div>
                <div className='p-[15px] border border-black'><FaArrowRightLong className='text-black'/></div>
                </Flex>
            </Flex>
            <Flex className='justify-between'>
                <ProjectCard  text1='Analytics, UI-Ux' text2='Branding & Digital Video Campaign For George’s Cafe' text3='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' text4='View Case Studies'/>
                <ProjectCard  text1='Mobile App' text2='Graphic Design Campaign For George’s Cafe' text3='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' text4='View Case Studies'/>
                <ProjectCard  text1='Web Development' text2='Web Development Campaign For George’s Cafe' text3='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' text4='View Case Studies'/>
            </Flex>
            <div className='text-center p-10'>
                <Button text='Explore More'/>
            </div>
        </Container>
    </section>
  )
}

export default Project