import React from 'react'
import chef from '../../assets/chef.png';
import spoon from '../../assets/spoon.png'
import quote from '../../assets/quote.png'
import sign from '../../assets/sign.png'
import './chef.css'
const Chef = () => {
  return (
    <div className="app__chef app__bg">
        <div className="app__chef-image">
           <img src={chef} alt="" className='' />
        </div>
        <div className="app__chef-content">
           <p>Chef’s Word</p>
            <img src={spoon} alt=""  className='spoon'/>
            <h1>What we believe in</h1>
            <p className='quote-p'>
                <img src={quote} alt="" className='quote'/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
            </p>
            <h1 className='chef-name'>Kevin Luo</h1>
            <p className='chef-position'>Chef & Founder</p>
            <img src={sign} alt="" className='sign'/>
        </div>
    </div>
  )
}

export default Chef;