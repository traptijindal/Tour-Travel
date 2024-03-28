import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


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

    </div>
  )
}

export default Contact
