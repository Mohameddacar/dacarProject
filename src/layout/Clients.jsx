import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import ClientCard from '../components/ClientCard'
import Flex from '../components/Flex'
import ClientSecondCard from '../components/ClientSecondCard'

const Clients = () => {
  return (
        <section className='bg-[#F9F4F1] py-[120px] ' >
            <Container>
                    <div className='pt-[20px]'>
                    <SubHeading  className='' text='Client Testimonial'/>
                    <Heading className='' text='Feedback From Client'/>
                    </div>  
                    <Flex className='justify-between'>
                    <ClientCard   />                       
                    <ClientCard   />  
                    </Flex>
                    <Flex className='justify-around'>
                    <ClientSecondCard />    
                    <ClientSecondCard />    
                    </Flex>                
            </Container>
        </section>
  )
}

export default Clients