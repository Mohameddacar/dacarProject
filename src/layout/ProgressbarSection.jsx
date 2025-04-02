import React from 'react'
import Progressbar from '../components/Progressbar'
import Container from '../components/Container'
import Flex from '../components/Flex'

const ProgressbarSection = ({percent,text}) => {
  return (
    <section className='pb-10'>
        <Container>
            <Flex className='flex-wrap justify-center md:justify-between gap-y-5 md:gap-y-0'>
            <Progressbar percent="70" text="Graphic Design" />
            <Progressbar percent="85" text="Brand Design" />
            <Progressbar percent="60" text="Web Designing" />
            <Progressbar percent="40" text="Web Development"/>
            </Flex>
        </Container>
    </section>

  )
}

export default ProgressbarSection