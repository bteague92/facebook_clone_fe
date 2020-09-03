import React from 'react';
import styled from 'styled-components';
import Phil from "../../images/phil.JPG";
import { faChevronCircleDown, faCalendarWeek, faHistory, faBookmark, faFlag, faHome, faUsers, faTv, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import MenuItem from "./menuItem.js";

const Container = styled.div`
width: 350px;
        overflow-y: auto;
        position: fixed;
        left: 0px;

        @media(max-width: 1100px){
            display: none
        }

        .profilePic{
            display: flex;
            align-items: center;
            margin: 20px 10px;

            img{
                width: 40px;
                height: 40px;
                border-radius: 50px;
            }

            h4{
                padding: 0 0 0 10px;
            }
        }
`;

const Left = (props) => {
    return (
        <Container>
            <div className="profilePic">
                <img src={Phil} />
                <h4>Brandon Teague</h4>
            </div>
            <MenuItem icon={faUserFriends} text={"Find Friends"} />
            <MenuItem icon={faUsers} text={"Groups"} />
            <MenuItem icon={faStore} text={"Marketplace"} />
            <MenuItem icon={faTv} text={"Watch"} />
            <MenuItem icon={faCalendarWeek} text={"Events"} />
            <MenuItem icon={faHistory} text={"Memories"} />
            <MenuItem icon={faBookmark} text={"Saved"} />
            <MenuItem icon={faFlag} text={"Pages"} />
            <MenuItem icon={faChevronCircleDown} text={"See More"} />
        </Container>
    );
}

export default Left;