import React from "react";
import HomePage from "./components/HomePage";
import TaskPage from "./components/TaskPage";
import Container from "@material-ui/core/Container";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { Router } from "@reach/router";

const paletteColor = lightBlue["A700"];

const themeInstance = createMuiTheme({
  palette: { background: { default: paletteColor } }
});

const App = () => {
  return (
    <MuiThemeProvider theme={themeInstance}>
      <Container fixed>
        <Router>
          <HomePage path="/" />
          <TaskPage path="/tasks/" />
        </Router>
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
