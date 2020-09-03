import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faVideo, faImages, faSmile, faChevronCircleDown, faCalendarWeek, faHistory, faBookmark, faFlag, faHome, faUsers, faTv, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 10px;

    &:hover{
        background: lightgrey;
    }

    .icon{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background: grey;
    }

    h4{
        padding: 0 0 0 10px;

    }
`;

const MenuItem = ({ icon, text }) => {
    return (
        <Container>
            <FontAwesomeIcon icon={icon} size="2x" color="blue" />
            <h4>{text}</h4>
        </Container>
    );
}

export default MenuItem;