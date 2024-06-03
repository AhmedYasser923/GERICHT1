import React from "react";
import "./contact-us.css";
import spoon from '../../assets/spoon.png'
const ContactUs = () => {
  return (
    <div className="app__contact-us app__bg">
      <div className="app__contact-us_section01">
        <h2>Contact Us</h2>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>
      <div className="app__contact-us_Section02">
        <h1>Gerícht</h1>
        <p>
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src="" alt="" />
        <div className="app__contact-us_sections02-icons"></div>
        <p>2021 Gerícht. All Rights reserved.</p>
      </div>
      <div className="app__contact-us_section01">
        <h2>Working Hours</h2>
        <p>Monday-Friday:</p>
        <p>08:00 am -12:00 am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 pm</p>
      </div>
    </div>
  );
};

export default ContactUs;
