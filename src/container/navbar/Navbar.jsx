import React,{useState} from 'react';
import Logo from '../../assets/gericht.png';
import { GiHamburgerMenu, GiSaltShaker } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './navbar.css';
const Menu = () => (
    <>
    <p><a href="">home</a></p>
    <p><a href="">Pages</a></p>
    <p><a href="">Contact Us</a></p>
    <p><a href="">Blog</a></p>
    <p><a href="">Landing</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    console.log(toggleMenu)
  return (
     <div className="app__navbar">
        <div className="app__navbar-logo">
        <img src={Logo}/>
        </div>
        <div className="app__navbar-links-list">
            <Menu/>
        </div>
        <div className="app__navbar-register">
            <p>Log in / registration</p>
            <div/>
            <p>book table</p>
        </div>
        <div className="app__navbar-overlay-menu">
            
            
                <GiHamburgerMenu
                    size={27}
                    color='white'
                    onClick={()=> setToggleMenu(true)}/>
            
            {
                toggleMenu && (
                    <>
                     <div className="app__navbar-overlay-close-icon">
                     <MdOutlineRestaurantMenu
                     size={29}
                     color='white'
                     onClick={()=> setToggleMenu(false)}/>
                     </div>
                    
                     <div className="app__navbar-overlay-list slide-bottom">
                     <Menu/>
                     <div className="app__navbar-overlay-register">
            <p>Log in / registration</p>
            <div/>
            <p>book table</p>
        </div>
                    </div>
                    </>
                )
                

            }
        </div>

        
        
    </div>
  )
}

export default Navbar;