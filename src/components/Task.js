import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

class Task extends Component {
  render() {
    return (
      <Link to="/tasks">
        <Button>{this.props.taskName}</Button>
      </Link>
    );
  }
}

export default Task;
