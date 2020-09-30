import React from 'react';
import '../App';

import {Link} from 'react-router-dom'

import screencap from '../images/screencap.png'

function SectionThree() {
  return (
    <>

      <div className="sectionThree">
        <div className="threeone">
          <img className="screencap" src={screencap} alt="examples"/>

          <Link className="link" to="/portfolio"><div className="button">See More</div></Link>
        </div>
        <div className="threetwo">

          <Link className="link" to="/contact"><div className="button">Contact</div></Link>
        </div>
      </div>

    </>
  );
}

export default SectionThree;
