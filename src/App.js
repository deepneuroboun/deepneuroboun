import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import TaskPage from './components/TaskPage';



class App extends Component {
  constructor(props) {
    super(props);
    this.changeSetting = this.changeSetting.bind(this);

    this.state = {
      currentTask: 'empty',
    };
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
