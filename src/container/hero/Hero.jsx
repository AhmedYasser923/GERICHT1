import React from "react";
import "./hero.css";
import Welcome from "../../assets/welcome.png";
import Spoon from "../../assets/spoon.png";
const Hero = () => {
  return (
    <div className="app__header section__padding">
      <div className="app__eader-left-side-content"></div>
      <div className="app__header-content">
        <p>Chase the new Flavour</p>
        <h1>The key to Fine dining</h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="app__header-image">
        <img src={Welcome} alt="" />
      </div>
    </div>
  );
};

export default Hero;
