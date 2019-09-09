import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CreateModal from './CreateModal';


import './TaskPage.css';

const {
  NEW_PROJECT,
  NEW_PROJECT_RENDERER,
} = require('../utils/constants');

const { ipcRenderer } = window;


class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRenderer = this.handleRenderer.bind(this);
    this.state = {
      currentState: 'belasiz bela',
    };
  }

  componentDidMount() {
    ipcRenderer.on(NEW_PROJECT_RENDERER, this.handleRenderer);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(NEW_PROJECT_RENDERER, this.handleRenderer);
  }

  handleRenderer(event, data) {
    this.setState({ currentState: data });
  }

  handleOnClick() {
    ipcRenderer.send(NEW_PROJECT, 'project_name');
  }



  render() {
    return (
      <div className='Task-page'>
        <h1>{this.props.currentTask}</h1>
        <CreateModal />
        <Button variant="contained"> Open Project </Button>
        <h1>{this.state.currentState}</h1>
      </div>
    );
  }
}

export default TaskPage;
