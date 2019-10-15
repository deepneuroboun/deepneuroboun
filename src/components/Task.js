import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Task extends Component {
  render() {
    return <Button variant="contained">{this.props.taskName}</Button>;
  }
}

export default Task;
