import React from 'react'
import Hero from '../components/app/Hero'
import MoreServices from '../components/services/MoreServices'
import ServiceFaq from '../components/services/ServiceFaq'
import ServiceOffer from '../components/services/ServiceOffer'

const ServicesPage = () => {
  return (
    <>
    <Hero title={"What we do"} imageUrl="assets/images/service/service_land.jpg"/>
    <ServiceOffer/>
    <MoreServices/>
    <ServiceFaq/>
    </>
  )
}

export default ServicesPage