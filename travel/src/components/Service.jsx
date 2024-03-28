import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


function Service() {
  return (
    <div>
     <Navbar/>
      <Hero
      cName="hero-mid"
      heroImage="about.jpg"
      title="Service"
     
     
      url="/service"
      btnClass="hide"
      />

    </div>
  )
}

export default Service
