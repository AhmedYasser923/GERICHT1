import React from "react";
import Knife from '../../assets/knife.png';
import spoon from '../../assets/spoon.png'
import './aboutus.css'
const MenuPrices = () => {
  return (
    <div className="app__about app__bg">
      <div className="app__about-us">
        <h1>About Us</h1>
        <img src={spoon} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Know More</button>
      </div>
      <div className="app__about-image">
        <img src={Knife}alt=""></img>
      </div>
      <div className="app__about-history">
        <h1>Our History</h1>
        <img src={spoon} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default MenuPrices;
