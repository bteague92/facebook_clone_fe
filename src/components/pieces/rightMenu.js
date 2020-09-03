import React from 'react';
import styled from 'styled-components';
import fbLogo from "../../images/facebookLogo.JPG";
import Phil from "../../images/phil.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faUsers, faTv, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width: 19vw;;
    height: 90vh;
    overflow-y: hidden;
    position: fixed;
    right: 0px;

    &:hover, &:active, &:focus {
        overflow-y: auto;
    }

    @media(max-width: 1100px){
        width: 23vw;
    }

    @media(max-width: 900px){
        display: none;
    }

    .ads{
        &:hover{
            background: lightgrey;
        }

        .single{
            width: 200px;
            height: 120px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: black;
            color: white;
            margin: 10px 0;
        }
    }

    .friends{
        border-top: 1px solid lightgrey;
        padding: 20px 0;

        .single{
            display: flex;
            align-items: center;
            margin: 12px 8px;

            &:hover{
                background: lightgrey;
            }

            img{
                width: 40px;
                height: 40px;
                border-radius: 50px;
            }

            p{
                padding: 0 0 0 10px;
            }
                
        }
    }
`;

const Right = (props) => {
    return (
        <Container>
            <div className="ads">
                <div className="single">
                    <p>Ad</p>
                </div>
                <div className="single">
                    <p>Ad</p>
                </div>
            </div>
            <div className="friends">
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
                <div className="single">
                    <img src={Phil} />
                    <p>Brandon Teague</p>
                </div>
            </div>
        </Container>
    );
}

export default Right;