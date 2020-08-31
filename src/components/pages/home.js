import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Home = (props) => {
  return (
    <Container>
      <div classname="left">
        <section classname="stories"></section>
        <section classname="input"></section>
        <section classname="rooms"></section>
        <section classname="timeline"></section>
      </div>
      <div classname="right">
        <section classname="ads"></section>
        <section classname="contacts"></section>
      </div>
    </Container>
  );
};

export default Home;
