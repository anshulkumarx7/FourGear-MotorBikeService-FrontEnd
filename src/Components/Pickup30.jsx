import React from 'react'
import "../Styles/PickUp30.css";
import scooterIcon from "../assets/scooty30min.svg"
function Pickup30() {
  return (
    <div className='fourGearPickUp'>
    <div className='fourGearPickUpContainer'>
    <img src={scooterIcon}></img>
    <h2>After booking, mechanics will reach</h2>
    <h2>out to you in <span className='colchange'>30 minutes</span></h2>
    </div>
    </div>
  )
}

export default Pickup30