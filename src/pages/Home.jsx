import React from 'react'
import Navber from '../layout/Navber'
import Banner from '../layout/Banner'
import ServicesLayout from '../layout/ServicesLayout'
import AboutLayout from '../layout/AboutLayout'
import ProgressbarSection from '../layout/ProgressbarSection'
import Project from '../layout/Project'

const Home = () => {
  return (
    <>
    <Navber />
    <Banner />
    <ServicesLayout />
    <AboutLayout />
    <ProgressbarSection />
    <Project />
    </>
  )
}

export default Home