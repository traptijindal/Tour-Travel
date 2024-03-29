import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import History from './History'

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
      <History/>
      <Footer/>

    </div>
  )
}

export default About
