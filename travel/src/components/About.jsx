import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function About() {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroImage="about.jpg"
      title="About"
     
     
      url="/about"
      btnClass="hide"
      />

    </div>
  )
}

export default About
