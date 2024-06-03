import React from "react";
import "./gallery.css";
import gallery01 from "../../assets/gallery01.png";
import gallery02 from "../../assets/gallery02.png";
import gallery03 from "../../assets/gallery03.png";
import gallery04 from "../../assets/gallery04.png";
import spoon from '../../assets/spoon.png'

const Gallery = () => {
  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <p>Instagram</p>
        <img src={spoon} alt="" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button>View More</button>
      </div>
      <div className="app__gallery-images">
        <img src={gallery01} alt="" />
        <img src={gallery02} alt="" />
        <img src={gallery03} alt="" />
        <img src={gallery04} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
