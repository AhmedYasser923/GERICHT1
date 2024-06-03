import React from 'react'
import Spoon from '../../assets/spoon.png';
import Menu from '../../assets/menu.png'
import './menuprices.css'
import MenuItem from '../../components/menu-item/MenuItem';
const MenuPrices = () => {
  return (
    <div className="app__menu">
        <div className="app__menu-header">
            <p>Menu that fits you palatte</p>
            <img src={Spoon} alt="" />
            <h1>Today’s Special</h1>
        </div>
        <div className="app__menu-content">
            <div className="app__menu-content-wine">
            <h1>Wine & Beer</h1>
            <MenuItem title="Chapel Hill Shiraz" text="AU | Bottle" price="$56"/>
            <MenuItem title="Catena Malbec" text="AR | Bottle" price="$59"/>
            <MenuItem title="La Vieille Rosé" text="AR | Bottle" price="$44"/>
            <MenuItem title="Rhino Pale Ale" text="AR | Bottle" price="$31"/>
            <MenuItem title="Irish Guinness" text="AR | Bottle" price="$26"/>
            </div>
            <div className="app__menu-image">
                <img src={Menu} alt="" />
            </div>
            <div className="app__menu-content-cocktails">
                <h1>Cocktails</h1>
                <MenuItem title="Aperol Spritz" text="Aperol | Villa Marchesi prosecco | soda | 30ml" price="$20"/>
                <MenuItem title="Dark 'N' Stormy" text="Dark rum | Ginger beer | Slice of lime. " price="$16"/>
                <MenuItem title="Daiquiri" text="Dark rum | Ginger beer | Slice of lime. " price="$10"/>
                <MenuItem title="Old Fashioned" text="Bourbon | Brown sugar | Angostura Bitters" price="$31"/>
                <MenuItem title="Negroni" text="Gin | Sweet Vermouth | Campari | Orange garnish" price="$26"/>
            </div>
         
        </div>
      
    </div>
  )
}

export default MenuPrices;