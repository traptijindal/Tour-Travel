import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Trip from './Trip'


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
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service
