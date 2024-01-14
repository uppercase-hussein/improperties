import React from 'react'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import Features from './components/Features'
import FeatureBoxes from './components/FeatureBoxes'
import DetailsBoxes from './components/DetailsBoxes'
import Testimonials from './components/Testimonials'
import OtherProperties from './components/OtherProperties'
import Contact from './components/Contact'
import Nearby from './components/Nearby'

const CampusGardenClassic = () => {
  return (
    <>
      <Navigation/>
      <Slider/>
      <Features/>
      <FeatureBoxes/>
      <hr/>
      <Nearby/>
      <Contact/>
    </>
  )
}

export default CampusGardenClassic
