import React, { useState } from 'react';
import "./NavbarStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';



function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick=()=>{
    setClicked(!clicked);
  }
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Tourio</h1>

        <div className='menu-icons' onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faXmark : faBars } />
      
        </div>
        <ul className={clicked ?"nav-menu active" : "nav-menu"}>
         {MenuItems.map((item,index) => {
          return(
            <li key={index}>
              
              
              <Link className={item.cName} to={item.url}>{item.title}</Link>
              
            </li>
          )
         })}
         {/* <button>Sign Up</button> */}
           
        </ul>
    </nav>
  )
}

export default Navbar;
