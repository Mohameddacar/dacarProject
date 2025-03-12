import React from 'react'
import Lists from './components/Lists'
import Button from './components/Button'
import Container from './components/Container'
import Flex from './components/Flex'
import ImageBanner from './assets/ImageBanner.jpg'
import Image from './components/Image'
import Navber from './layout/Navber'
import Banner from './layout/Banner'
import Services from './layout/Services'

const App = () => {
  return (
    <>
    <Navber />
    <Banner />
    <Services />
    </>
  )
}

export default App