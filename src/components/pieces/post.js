import React from 'react';
import styled from 'styled-components';
import fbLogo from "../../images/facebookLogo.JPG";
import Phil from "../../images/phil.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faVideo, faImages, faSmile, faChevronCircleDown, faCalendarWeek, faHistory, faBookmark, faFlag, faHome, faUsers, faTv, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 7px 7px;
    background: white;
    margin: 15px 0 0 0;
    width: 100%;

    .top{
        display: flex;
        
        .pic{
            width: 10%;
        }

        .nameTime{
            width: 80%;
        }

        .dots{
            width: 10%;
        }
    }

    .middle{
        padding: 5px 20px 0 10px;
        margin: 0;
        width: 90%;
        font-size: 1.2rem;
        word-wrap: break-word;

        p{
            max-width: 90%;
        }
    }

    .recom{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        padding: 0 10px;

        .reactions{

        }

        .comments{

        }
    }

    .bottom{
        display: flex;
        justify-content: space-around;
        border-top: 1px solid grey;
        padding: 10px 0;

        .like{
            display: flex;

            h4{
                padding: 0 0 0 10px;
            }

        }

        .comment{
            display: flex;

            h4{
                padding: 0 0 0 10px;
            }

        }
    }
`;

const Post = ({ name, time, text, reactions }) => {
    return (
        <Container>
            <div className="top">
                <div className="pic" >
                    <img src={Phil} />
                </div>
                <div className="nameTime" >
                    <h4>{name}</h4>
                    <p>{time}</p>
                </div>
                <div className="dots" >
                    <div style={{ width: "30px", height: "30px", background: "grey" }} ></div>
                </div>
            </div>
            <div className="middle">
                <p>{text}</p>
            </div>
            <div className="recom">
                <div className="reactions" >
                    <p>{reactions}</p>
                </div>
                <div className="comments" >
                    <p>{reactions} comments</p>
                </div>
            </div>
            <div className="bottom">
                <div className="like" >
                    <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                    <h4>Like</h4>
                </div>
                <div className="comment" >
                    <FontAwesomeIcon icon={faComment} size="lg" />
                    <h4>Comment</h4>
                </div>
            </div>
        </Container>
    );
}

export default Post;