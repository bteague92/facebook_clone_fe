import React from 'react';
import styled from 'styled-components';
import fbLogo from "../../images/facebookLogo.JPG";
import Phil from "../../images/phil.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faUsers, faTv, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width: 100%;
    height: 63px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    position: fixed;
    background: white;

    .left{

        width: 300px;
        height: 100%;
        display: flex;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            padding: 10px;
        }

        .mag{
            width: 35px;
            height: 35px;
            background: grey;
            margin: 0 6px;
            border-radius: 50px;
            margin: 14px 0 0 0;
        }
    }

    .middle{

        width: 700px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .button{
            width: 40px;
            height: 40px;
            background: grey;

            &:hover{
                background: lightgrey;
            }
        }
    }

    .right{

        width: 300px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .button{
            width: 40px;
            height: 40px;
            background: grey;
            margin: 0 6px;
            border-radius: 50px;

            &:hover{
                background: lightgrey;
            }
        }
    }
`;

const NavBar = (props) => {
    return (
        <Container>
            <div className="left">
                <img src={fbLogo} />
                <div className="mag">

                </div>
            </div>
            <div className="middle">
                <FontAwesomeIcon icon={faHome} size="2x" color="blue" />
                <FontAwesomeIcon icon={faUserFriends} size="2x" color="blue" />
                <FontAwesomeIcon icon={faTv} size="2x" color="blue" />
                <FontAwesomeIcon icon={faStore} size="2x" color="blue" />
                <FontAwesomeIcon icon={faUsers} size="2x" color="blue" />
            </div>
            <div className="right">
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
            </div>
        </Container>
    );
}

export default NavBar;