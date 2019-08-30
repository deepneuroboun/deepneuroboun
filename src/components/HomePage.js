import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <body className='Home-page'>
        <div className='Home-page-item OFT'>Open Field Test</div>
        <div className='Home-page-item'>EPM</div>
        <div className='Home-page-item'>FST</div>
        <div className='Home-page-item'>WYM</div>
      </body>
    );
  }
}


export default HomePage;
