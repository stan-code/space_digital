import React, { useState } from 'react';
import '../App';
import Modal from 'react-modal'

import Header from '../components/header'

import Footer from '../components/footer'

import safelogo from '../images/safelogo.png'
import timlogo from '../images/timlogo.png'
import bbaclogo from '../images/Bath Bomb and Chill.png'
import sabbylogo from '../images/Final Logo.jpg'
import justines from '../images/justines.png'
import tomtom from '../images/tomtom.png'
import desi from '../images/desi.png'
import moog from '../images/moog.png'
import eurosport from '../images/eurosport.png'

// modal artwork import begins

import safemockups from '../images/SafeMockups.png'
import sabbyMockups from '../images/SabbyMockups.png'
import bbacMockups from '../images/BBACMockups.png'
import justinesMockups from '../images/JustinesNpd.png'
import tomtomMockups from '../images/TomTomMenu.png'
import desiMockups from '../images/desiMockup.png'
import moogMockups from '../images/MoogMockups.png'

//modal artwork import ends

function Portfolio() {
  const [modal1IsOpen, setmodal1IsOpen] = useState(false)
  const [modal2IsOpen, setmodal2IsOpen] = useState(false)
  const [modal3IsOpen, setmodal3IsOpen] = useState(false)
  const [modal4IsOpen, setmodal4IsOpen] = useState(false)

  const [modal5IsOpen, setmodal5IsOpen] = useState(false)
  const [modal6IsOpen, setmodal6IsOpen] = useState(false)
  const [modal7IsOpen, setmodal7IsOpen] = useState(false)
  const [modal8IsOpen, setmodal8IsOpen] = useState(false)
  const [modal9IsOpen, setmodal9IsOpen] = useState(false)
  const [modal10IsOpen, setmodal10IsOpen] = useState(false)
  const [modal11IsOpen, setmodal11IsOpen] = useState(false)

  return (
    <>

      <Header />
      <div className="webBody">

        <div className="headtext">
        <h1>Logo and Brand Identity</h1>
        </div>
        <div className="portfolioBody">
          
      <div className="portfolio">

          <div className="portfoliosection">
            <div><img src={safelogo}/></div>
            <div><h2>Safe Ict Nz Logo</h2></div>
            <div className="button" onClick={() => setmodal1IsOpen(true)}>View</div>
            <Modal isOpen={modal1IsOpen}>
              <div className="modalInner">
                <div className="modalInner1">
                  <h1>Safe ICT NZ Logo</h1>
                  <p>
                    When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                </div>

                  <div className="modalInner2">
              <img src={safemockups} alt="safe"/>
              <div className="button" onClick={() => setmodal1IsOpen(false)}>close</div>
                  </div>
              </div>
            </Modal>
          </div>

            <div className="portfoliosection">
              <div><img src={timlogo} /></div>
              <div><h2>Tim Concepts LTD Logo</h2></div>
              <div className="button" onClick={() => setmodal2IsOpen(true)}>View</div>
              <Modal isOpen={modal2IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>Tim Concepts LTD Logo</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={timlogo} alt="safe" />
                    <div className="button" onClick={() => setmodal2IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={bbaclogo} /></div>
              <div><h2>BathBomb & Chill Logo</h2></div>
              <div className="button" onClick={() => setmodal3IsOpen(true)}>View</div>
              <Modal isOpen={modal3IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>BathBomb & Chill Logo</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={bbacMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal3IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={sabbylogo} /></div>
              <div><h2>Sabby Jey Social Logo</h2></div>
              <div className="button" onClick={() => setmodal4IsOpen(true)}>View</div>
              <Modal isOpen={modal4IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>Sabby Jey Social Logo</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={sabbyMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal4IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>
          

      </div>
        </div>

        <div className="headtext">
          <h1>Graphic Design and Illustration</h1>
        </div>
        <div className="portfolioBody">

          <div className="portfolio">

            <div className="portfoliosection">
              <div><img src={justines} /></div>
              <div><h2>Justine's Cookies Rebrand</h2></div>
              <div className="button" onClick={() => setmodal5IsOpen(true)}>View</div>
              <Modal isOpen={modal5IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>Justine's Cookies Rebrand</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={justinesMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal5IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={tomtom} /></div>
              <div><h2>TomTom Bar & Eatery Menu</h2></div>
              <div className="button" onClick={() => setmodal6IsOpen(true)}>View</div>
              <Modal isOpen={modal6IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>TomTom Bar & Eatery Menu</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={tomtomMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal6IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={desi} /></div>
              <div><h2>Desi Pal Illustrations</h2></div>
              <div className="button" onClick={() => setmodal7IsOpen(true)}>View</div>
              <Modal isOpen={modal7IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>Desi Pal Illustrations</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={desiMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal7IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={moog} /></div>
              <div><h2>Moog iOS sticker pack</h2></div>
              <div className="button" onClick={() => setmodal8IsOpen(true)}>View</div>
              <Modal isOpen={modal8IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>Moog iOS sticker pack</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={moogMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal8IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={eurosport} /></div>
              <div><h2>EuroSport Social Media</h2></div>
              <div className="button" onClick={() => setmodal9IsOpen(true)}>View</div>
              <Modal isOpen={modal9IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>EuroSport Social Media</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={moogMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal9IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={moog} /></div>
              <div><h2>Inspire Social Media</h2></div>
              <div className="button" onClick={() => setmodal10IsOpen(true)}>View</div>
              <Modal isOpen={modal10IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>Inspire Property Management Social Media</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={moogMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal10IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="portfoliosection">
              <div><img src={moog} /></div>
              <div><h2>Justine's Social Media</h2></div>
              <div className="button" onClick={() => setmodal11IsOpen(true)}>View</div>
              <Modal isOpen={modal11IsOpen}>
                <div className="modalInner">
                  <div className="modalInner1">
                    <h1>Inspire Property Management Social Media</h1>
                    <p>
                      When designing the logo for Safe ICT NZ, i decided to start with a design that was modern and stylish. The client specified they wanted something that would
                  </p>
                  </div>

                  <div className="modalInner2">
                    <img src={moogMockups} alt="safe" />
                    <div className="button" onClick={() => setmodal11IsOpen(false)}>close</div>
                  </div>
                </div>
              </Modal>
            </div>


          </div>
        </div>

        <div className="headtext">
          <h1>Web Design and Development</h1>
        </div>
        <div className="portfolioBody">

          <div className="portfolio">

            <div className="portfoliosection">
              <div><img src={safelogo} /></div>
              <div><h2>Safe Ict Nz Logo</h2></div>
              <div className="button">View</div>
            </div>

            <div className="portfoliosection">
              <div><img src={timlogo} /></div>
              <div><h2>Tim Concepts LTD Logo</h2></div>
              <div className="button">View</div>
            </div>

            <div className="portfoliosection">
              <div><img src={bbaclogo} /></div>
              <div><h2>Bath Bomb & Chill Logo</h2></div>
              <div className="button">View</div>
            </div>

            <div className="portfoliosection">
              <div><img src={sabbylogo} /></div>
              <div><h2>Sabby Jey Social Logo</h2></div>
              <div className="button">View</div>
            </div>


          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
