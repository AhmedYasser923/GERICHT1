import React from 'react';
import './findus.css';
import spoon from '../../assets/spoon.png';
import findus from '../../assets/findus.png'

const FindUs = () => {
  return (
   <div className="app__find-us app__bg">
    <div className="app__find-us_content">
        <h4>Contact</h4>
        <img src={spoon} alt="" />
        <h1>Find Us</h1>
        <h5>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</h5>
        <h3>Opening Hours</h3>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
        <button>Visit Us</button>
    </div>
    <div className="app__find-us-image">
        <img src={findus} alt="" />
    </div>
   </div>
  )
}

export default FindUs;