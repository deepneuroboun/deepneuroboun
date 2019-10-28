import React from "react";
import HomePage from "./components/HomePage";
import TaskPage from "./components/TaskPage";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Router>
          <HomePage path="/" />
          <TaskPage path="/tasks/" />
        </Router>
      </Box>
    </Container>
  );
};

export default App;
