import React, { Component } from "react";
import Task from "./Task";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Task taskName="Open Field Test" />
        <Task taskName="EPM" />
        <Task taskName="FST" />
        <Task taskName="WYM" />
      </div>
    );
  }
}

export default HomePage;
