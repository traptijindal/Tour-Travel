import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Destination from './Destination'
import Trip from './Trip'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero"
      heroImage="travel1.jpg"
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination."
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
    </div>
  )
}

export default Home
