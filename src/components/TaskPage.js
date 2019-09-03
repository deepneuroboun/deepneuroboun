import React, { Component } from 'react';
import './TaskPage.css';

class TaskPage extends Component {
    render() {
        return (
            <div className='Task-page'>
                <h1>{this.props.currenTask}</h1>
            </div>
        );
    }
}

export default TaskPage;