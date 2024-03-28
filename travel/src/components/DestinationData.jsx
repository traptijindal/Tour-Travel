import React from 'react'
import "./DestinationStyles.css";

function DestinationData(props) {
  return (
    <div>
       <div className={props.className}>
       <div className='des-text'>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
       </div>
       <div className='image'>
         <img alt="image" src={props.img1}/>
         <img alt="image" src={props.img2}/>
       </div>
      </div>
    </div>
  )
}

export default DestinationData
