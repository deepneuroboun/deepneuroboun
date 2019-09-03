import React, { Component } from 'react';
import Button from '@material-ui/core/Button';




class Task extends Component {
    render() {
        var handler = this.props.handler;
        return (
            <Button variant="contained" onClick={() => {handler(this.props.taskName)}}>
                {this.props.taskName}
            </Button>
        );
    }
}

export default Task;