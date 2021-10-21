
import React, { useState } from "react";
import { Link } from "react-scroll"

import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
     
            <Link to="hero" smooth={true} duration={1000} > <img src="/alphabet-g.svg" alt="" id="logo"/> </Link>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="about" smooth={true} duration={1000} >About</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="work" smooth={true} duration={1000} >Work</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="contact" smooth={true} duration={1000} >Contact</Link>
          </li>
         
         
        </ul>
     
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <p className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </p>
        ) : (
          <p className="menu-icon" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> 
             </p>
        )}
      </div>
    </div>
  );
};

export default Header;