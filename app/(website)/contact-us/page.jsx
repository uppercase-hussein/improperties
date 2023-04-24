import React from 'react'
import Hero from '../components/app/Hero'
import ContactAddress from '../components/contact/ContactAddress'
import ContactForm from '../components/contact/ContactForm'
import ContactMap from '../components/contact/ContactMap'

const ContactPage = () => {
  return (
    <>
    <Hero title="Contact Us" imageUrl="assets/images/contact_banner.jpg"/>
    <ContactAddress/>
    <ContactForm/>
    <ContactMap/>
    </>
  )
}

export default ContactPage