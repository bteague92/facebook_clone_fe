import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 58px;
  border-bottom: 1px solid lightgrey;
  width: 100vw;
  display: flex;
`;

const NavBar = (props) => {
  return (
    <Container>
      <div classname="logo">
        <section classname="fblogo"></section>
        <section classname="search"></section>
      </div>
      <div classname="middle">
        <section classname="home"></section>
        <section classname="friends"></section>
        <section classname="videos"></section>
        <section classname="market"></section>
        <section classname="hamburger"></section>
      </div>
      <div classname="end">
        <section classname="add"></section>
        <section classname="messages"></section>
        <section classname="notifications"></section>
        <section classname="dropdown"></section>
      </div>
    </Container>
  );
};

export default NavBar;
