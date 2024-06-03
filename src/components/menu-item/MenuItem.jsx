import React from 'react'
import './menuitem.css'
const MenuItem = ({title , text , price}) => {
  return (
    <div className="app__menu-item">
        <div className='app__menu-item-content'>
        <h4>{title}</h4>
        <div className='line'/>
        <p>{price}</p>
        </div>
       
       <p>{text}</p>



       
    </div>
  )
}

export default MenuItem;