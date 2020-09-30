import React from 'react';
import '../App';

import Header from '../components/header'
import HomeBanner from '../components/homeBanner'
import SectionTwo from '../components/sectionTwo'
import SectionThree from '../components/sectionThree'
import Footer from '../components/footer'

function Home() {
  return (
    <>
      
      <Header />
      <div className="webBody">
      <HomeBanner />
      <div className="bottomSections">
      <SectionTwo/>
      <SectionThree />
      
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
