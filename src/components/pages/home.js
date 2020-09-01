import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: blue;
  border: 2px solid black;
  width: 50%;
  min-height: 10%;

  .inner{
    background: grey;
    width: 100%;
    height: 100%;
  }
`;

const Home = (props) => {
  return (
    <Container>
      <div className="inner" ></div>
    </Container>
  );
};

export default Home;
