import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Task from "./Task";

class HomePage extends Component {
  render() {
    return (
      <Grid container spacing={3} justisfy="center" alignItems="center">
        <Grid item xs={6}>
          <Paper>
            <Task taskName="Open Field Test" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Task taskName="EPM" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Task taskName="FST" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Task taskName="WYM" />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
