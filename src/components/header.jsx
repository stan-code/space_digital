import React from 'react';
import '../App';
import {Link} from 'react-router-dom'

import logo from '../images/logo.png'

function Header() {
  return (
    <>
      <div className="header">
        <div className="logoDiv">
          <Link className="link" to="/"><img className="logo" src={logo} alt="Logo" /></Link>
        </div>

        <div className="menu">
          <Link className="link" to="/"><h3>Home</h3></Link>
          <Link className="link" to="/about"><h3>About</h3></Link>
          <Link className="link" to="/portfolio"><h3>Portfolio</h3></Link>
          <Link className="link" to="/contact"><h3>Contact</h3></Link>
        </div>


      </div>
    </>
  );
}

export default Header;
