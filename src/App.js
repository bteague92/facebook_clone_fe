import React from "react";
import "./App.css";
import styled from "styled-components";
import NavBar from "./components/pieces/navbar.js";
import Home from "./components/pages/home.js";

const Container = styled.div`
  background-color: lightgreen;
  min-height: 100vh;
  min-width: 100vw;
`;

function App(props) {
  return (
    <Container>
      {/* <NavBar /> */}
      <Home />
    </Container>
  );
}

export default App;
