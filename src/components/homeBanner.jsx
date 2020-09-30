import React from 'react';
import '../App';

import imageone from '../images/logodesigns.png'
import imagetwo from '../images/graphicexamples.png'
import imagethree from '../images/webdev.png'

import {Link} from 'react-router-dom'


function HomeBanner() {
  return (
    <>
    <div className="homeBanner">

      <div className="section">
        <div className="sectioninner">
        <img className="sectionImage" src={imageone} />
        <div>
            <h2>Brand Identity</h2>
              <Link className="link" to="/portfolio"><div className="button">See More</div></Link>
            </div>
        </div>
      </div>

        <div className="section">
          <div className="sectioninner">
            <img className="sectionImage" src={imagetwo} />
            <div>
            <h2>Graphic Design</h2>
              <Link className="link" to="/portfolio"><div className="button">See More</div></Link>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="sectioninner">
            <img className="sectionImage" src={imagethree} />
            <div>
            <h2>Web Development</h2>
              <Link className="link" to="/portfolio"><div className="button">See More</div></Link>
            </div>
          </div>
        </div>

    </div>
    </>
  );
}

export default HomeBanner;
