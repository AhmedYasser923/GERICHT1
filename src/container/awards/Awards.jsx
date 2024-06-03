import React from 'react';
import './awards.css';
import AwardItem from '../../components/awarditem/AwardItem'
import Award01 from '../../assets/award01.png';
import Award02 from '../../assets/award02.png';
import Award03 from '../../assets/award03.png';
import Award05 from '../../assets/award05.png';
import Laurels from '../../assets/laurels.png';
import logo from '../../assets/logo.png'
import Spoon from '../../assets/spoon.png'

const Awards = () => {
  return (
    <div className="app__awards app__bg">
        <div className="app__awards-logo">
        <img src={logo} alt="" />
        </div>
        <div className="app__awards-content">
          <div className="app__awards-content-header">
            <p>Awards & recognition</p>
            <img src={Spoon} alt=''/>
            <h1>Our Laurels</h1>
          </div>
          <div className="app__awards-contetn-images">
          
           <AwardItem img={Award01} title='Bib Gourmond' text='Lorem ipsum dolor sit amet, consectetur.' />
           <AwardItem img={Award01} title='Bib Gourmond' text='Lorem ipsum dolor sit amet, consectetur.' />
           <AwardItem img={Award01} title='Bib Gourmond' text='Lorem ipsum dolor sit amet, consectetur.' />
           <AwardItem img={Award01} title='Bib Gourmond' text='Lorem ipsum dolor sit amet, consectetur.' />
          
          </div>
        </div>
        <div className="app__awards-image">
           <img src={Laurels} alt="" />
        </div>
    </div>
  )
}

export default Awards