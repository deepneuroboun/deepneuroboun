import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import TaskPage from './components/TaskPage';


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
    this.changeSetting = this.changeSetting.bind(this);

    this.state = {
      python: 'empty',
      currentTask: 'empty',
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

  changeSetting(newTask) {
    this.setState({
      currentTask: newTask,
    });
  }

  render() {
    if (this.state.currentTask === 'empty')
      return (
        <HomePage changeSetting={this.changeSetting}/>
      );
    else
      return (
        <TaskPage currentTask={this.state.currentTask} />
      );
  }
}

export default App;
