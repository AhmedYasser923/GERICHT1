import React from 'react';
import './App.css';
import Navbar from './container/navbar/Navbar';
import Hero from './container/hero/Hero';
import AboutUs from './container/aboutus/AboutUs';
import MenuPrices from './container/menuprices/MenuPrices';
import Chef from './container/chef/Chef';
import Video from './container/video/Video';
import Awards from './container/awards/Awards';
import Gallery from './container/gallery/Gallery';
import FindUs from './container/findus/FindUs';
import NewsLetter from './container/news-letter/NewsLetter';
import ContactUs from './container/contact-us/ContactUs';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <MenuPrices/>
      <Chef/>
      <Video/>
      <Awards/>
      <Gallery/>
      <FindUs/>
      <NewsLetter/>
      <ContactUs/>
    </div>
  );
}

export default App;
