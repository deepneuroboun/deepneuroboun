import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';


const {
  CATCH_ON_MAIN,
  SEND_TO_RENDERER,
} = require('./utils/constants');

const { ipcRenderer } = window;


class App extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRenderer = this.handleRenderer.bind(this);

    this.state = {
      python: 'empty',
    };
  }

  componentDidMount() {
    ipcRenderer.on(SEND_TO_RENDERER, this.handleRenderer);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(SEND_TO_RENDERER,  this.handleRenderer);
  }

  handleRenderer(event, data) {
    this.setState({ python: data });
  }

  handleOnClick() {
    ipcRenderer.send(CATCH_ON_MAIN, 'ping');
  }

  render() {
    return (
      <HomePage />
    );
  }
}

export default App;
