import React, { Component } from 'react';
import './HomePage.css';
import Task from './Task';

class HomePage extends Component {
  render() {
    return (
      <body className='Home-page'>
        <div className='Home-page-item OFT'>
          <Task taskName="Open Field Test" handler={this.props.changeSetting} />
        </div>
        <div className='Home-page-item'>
          <Task taskName="EPM" handler={this.props.changeSetting} />
        </div>
        <div className='Home-page-item'>
          <Task taskName="FST" handler={this.props.changeSetting} />
        </div>
        <div className='Home-page-item'>
          <Task taskName="WYM" handler={this.props.changeSetting} />
        </div>
      </body>
    );
  }
}


export default HomePage;
