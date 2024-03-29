import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import ContactForm from './ContactForm'


function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroImage="hero.jpg"
      title="Contact"
     
     
      url="/contact"
      btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
