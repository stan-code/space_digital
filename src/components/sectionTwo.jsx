import React from 'react';
import '../App';

import dp from '../images/dp.jpg'

import {Link} from 'react-router-dom'


function SectionTwo() {
  return (
    <>

        <div className="sectionTwo">
        <div className="twoone">
          <div className="twooneone">
          <h1>About Space Digital.</h1>
            <h3 className="pText">“Without a great design, your product is just another product. At Space, we design with the customer in mind and work closely with you to develop strong, direct and fun graphics for your product or business.”</h3>
            <h3 className="sigText">-Stan Gogan (Director, Space Digital)</h3>
          </div>

          <Link className="link" to="/about"><div className="button">Learn More</div></Link>
          </div>
        <div className="twotwo">
        <img className="dp" src={dp}/>
        </div>

        </div>

    </>
  );
}

export default SectionTwo;
