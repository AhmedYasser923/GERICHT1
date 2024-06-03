import React from 'react'
import './awarditem.css'
const AwardItem = ({img , title , text}) => {
  return (
    <div className="app__award-item">
        <div className="app__award-item-img">
           <img src={img} alt="" />
        </div>
        <div className="app__award-item-heading">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default AwardItem;