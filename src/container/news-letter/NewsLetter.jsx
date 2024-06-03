import React from 'react'
import './news-letter.css';
import spoon from '../../assets/spoon.png'
const NewsLetter = () => {
  return (
    <div className="app__newsletter">
        <h3>Newsletter</h3>
        <img src={spoon}alt="" />
        <h1>Subscribe to Our Newsletter</h1>
        <p>And never miss latest Updates!</p>
        <div className="">
            <input type="text" placeholder='Email Address'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;