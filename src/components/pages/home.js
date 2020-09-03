import React, { useState } from 'react';
import styled from 'styled-components';
import RightMenu from "../pieces/rightMenu.js";
import Middle from "../pieces/middle.js";
import LeftMenu from "../pieces/leftMenu.js";

const Container = styled.div`
    height: auto;
    max-width: 100vw;
    background: rgb(242, 242, 242);
    display: flex;
    justify-content: center;
    padding: 63px 0 0 0;

    @media(max-width: 1100px){
        justify-content: flex-start;
    }

    @media(max-width: 900px){
        justify-content: center;
    }
`;

const Homes = (props) => {

    return (
        <Container>
            <LeftMenu />
            <Middle />
            <RightMenu />
        </Container>
    );
}

export default Homes;