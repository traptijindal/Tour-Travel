import React from 'react'
import "./TripStyles.css"
import TripData from './TripData';

function Trip() {
  return (
    <div className='trip'>
    <h1>Recent Trips</h1>
    <p>You can discover unique destinations using Google Maps.</p>
    <div className='tripcard'>
      <TripData
      image="trip1.jpg"
      heading="Trip in Indonesia"
      text="Indonesia, officialy the Republic of Indonesia, is a country in Southeast Asia and Oceani between the Indian and Pacific Oceeans.It consists of over 17000 islands, incluing Sumatra, Java , Sulawesi and place of Bornio and New Guinea "
      />
      <TripData 
      image="trip2.jpg"
      heading="Trip in Malaysia "
      text="Malaysia is a Southeast Asian country occupying parts of the Malay, Peninsula and the island of Borneo it's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
      />
      <TripData
      image="trip3.jpg"
      heading="Trip in France"
      text="France in Western Europe, encompasses medieval citie, alpine villages and Mediterranean beaches.Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments including he Louvre and monumnets like the Eiffel Tower."/>
    </div>
    </div>
  )
}

export default Trip
