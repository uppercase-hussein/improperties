import React from 'react'
import AboutDetails from '../components/about/AboutDetails'
import AboutService from '../components/about/AboutService'
import ChooseUs from '../components/about/ChooseUs'
import Hero from '../components/app/Hero'
import Team from '../components/home/Team'

const AboutPage = () => {
  return (
    <>
    <Hero title={"About Us"} imageUrl="assets/images/team/improp_team2.webp"/>
    <AboutDetails/>
    <AboutService/>
    <ChooseUs/>
    <Team/>
    </>
  )
}

export default AboutPage