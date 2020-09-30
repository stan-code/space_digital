import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, withRouter} from 'react-router-dom'

import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import About from './pages/about'
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Fragment>
        <ScrollToTop />
    <>

    <Route exact path="/" component={Home}/>
    <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
    </>
      </Fragment>
    </Router>
  );
}

export default App;
