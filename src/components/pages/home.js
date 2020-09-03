import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from "../../images/logo.JPG";
import StoryOne from "../../images/storyOne.JPG";
import Phil from "../../images/phil.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faVideo, faImages, faSmile, faChevronCircleDown, faCalendarWeek, faHistory, faBookmark, faFlag, faHome, faUsers, faTv, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    height: auto;
    max-width: 100vw;
    background: rgb(242, 242, 242);
    display: flex;
    justify-content: center;;

    .left{
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

        .iconGroup{
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
        }
    }

    .middle{
        width: 700px;
        padding: 0 30px;

        .stories{
            height: 239px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0 0 0;

            .indiStory{
                width: 19%;
                border: 1px solid black;
                border-radius: 10px;
                height: 85%;

                &:hover{
                    width: 20%;
                    height: 87%;
                }

                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .input{
            border: 1px solid lightgrey;
            border-radius: 10px;
            height: 130px;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .text{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;

                .profileImg{

                    img{
                        height: 45px;
                        width: 45px;
                        border-radius: 50%;
                        margin: 0 10px 0 0;
                    }
                }

                .post{
                    width: 85%;

                    input{
                        width: 100%;
                        height: 30px;
                        border-radius: 50px;
                        font-size: 18px;
                        padding: 0 0 0 5px;
                        background: rgb(242, 242, 242);
                        border: 1px solid rgb(242, 242, 242);
                    }
                }
            }

            .buttons{
                display: flex;
                justify-content: space-around;
                background: white;

                .live{
                    display:flex;
                    align-items: center;
                    width: 25%;

                    &:hover{
                        background: lightgrey;
                    }

                    h4{
                        padding: 0 0 0 10px;
                    }
                }

                .upload{
                    display:flex;
                    align-items: center;
                    width: 25%;

                    &:hover{
                        background: lightgrey;
                    }

                    h4{
                        padding: 0 0 0 10px;
                    }
                }

                .feeling{
                    display:flex;
                    align-items: center;
                    width: 25%;

                    &:hover{
                        background: lightgrey;
                    }

                    h4{
                        padding: 0 0 0 10px;
                    }
                }
            }
        }

        .rooms{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border: 1px solid lightgrey;
            border-radius: 10px;
            height: 100px;
            padding: 0 15px;
            background: white;
            margin: 15px 0 0 0;

            .top{
                width: 100%;
                display: flex;
                justify-content: space-between;

                .topLeft{
                    width: 60%;
                    display: flex;
                    align-items: center;

                    img{
                        wdith: 40px;
                        height: 40px;
                    }

                    h5{

                    }

                    p{

                    }
                }

                .topRight{
                    width: 40%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    a{
                        color: blue;
                    }
                }
            }

            .bottom{
                width: 100%;
                display: flex;
                justify-content: space-around;

                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
        }

        .timeline{
            display: flex;
            flex-direction: column;
            padding: 0 15px 0 0;
            margin: 15px 0 0 0;

            .post{
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
                    width: 95%;
                    font-size: 1.2rem;
                    word-wrap: break-word;
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
            }
        }
    }

    .right{

        width: 350px;
        height: 90vh;
        overflow-y: hidden;
        position: fixed;
        right: 0px;

        &:hover, &:active, &:focus {
            overflow-y: auto;
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
    }
`;

const Homes = (props) => {

    let [posts, setPosts] = useState([
        {
            img: Phil,
            name: "Chuck Norris",
            time: "2h",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            comments: 7,
            reactions: 2
        },
        {
            img: Phil,
            name: "Bruce Lee",
            time: "2h",
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
            comments: 7,
            reactions: 2
        },
        {
            img: Phil,
            name: "Floyd Mayweather",
            time: "2h",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
            comments: 7,
            reactions: 2
        },
        {
            img: Phil,
            name: "Donald Trump",
            time: "2h",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            comments: 7,
            reactions: 2
        },
        {
            img: Phil,
            name: "Joe Biden",
            time: "2h",
            text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            comments: 7,
            reactions: 2
        },
    ])

    const [post, setPost] = useState('')

    const handleChange = (e) => {
        setPost(e.target.value)
    }

    const addPost = (e) => {
        e.preventDefault()
        let arr = [
            {
                img: Phil,
                name: "Brandon Teague",
                time: "1m",
                text: post,
                comments: 0,
                reactions: 0
            }
        ]

        setPosts([...arr, ...posts])
    }

    return (
        <Container>
            <div className="left">
                <div className="profilePic">
                    <img src={Phil} />
                    <h4>Brandon Teague</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faUserFriends} size="2x" />
                    <h4>Find Friends</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faUsers} size="2x" />
                    <h4>Groups</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faStore} size="2x" />
                    <h4>Marketplace</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faTv} size="2x" />
                    <h4>Watch</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faCalendarWeek} size="2x" />
                    <h4>Events</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faHistory} size="2x" />
                    <h4>Memories</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faBookmark} size="2x" />
                    <h4>Saved</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faFlag} size="2x" />
                    <h4>Pages</h4>
                </div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faChevronCircleDown} size="2x" />
                    <h4>See More</h4>
                </div>
            </div>
            <div className="middle" >
                <div className="stories">
                    <div className="indiStory">
                        <img src={StoryOne} />
                    </div>
                    <div className="indiStory">
                        <img src={StoryOne} />
                    </div>
                    <div className="indiStory">
                        <img src={StoryOne} />
                    </div>
                    <div className="indiStory">
                        <img src={StoryOne} />
                    </div>
                    <div className="indiStory">
                        <img src={StoryOne} />
                    </div>
                </div>
                <div className="input">
                    <div className="text">
                        <div className="profileImg">
                            <img src={Phil} alt="logo" />
                        </div>
                        <div className="post">
                            <input
                                type="text"
                                placeholder="What's on your mind, Brandon?"
                                onChange={handleChange}
                            />
                            <button onClick={addPost}>Submit</button>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="live">
                            <FontAwesomeIcon icon={faVideo} size="2x" />
                            <h4>Live Video</h4>
                        </div>
                        <div className="upload">
                            <FontAwesomeIcon icon={faImages} size="2x" />
                            <h4>Photo/Video</h4>
                        </div>
                        <div className="feeling">
                            <FontAwesomeIcon icon={faSmile} size="2x" />
                            <h4>Feeling/Activity</h4>
                        </div>
                    </div>
                </div>
                <div className="rooms">
                    <div className="top">
                        <div className="topLeft">
                            <img src={Logo} />
                            <h3>Rooms - </h3>
                            <strong><p>Video chat with friends</p></strong>
                        </div>
                        <div className="topRight">
                            <a>Create a room</a>
                        </div>
                    </div>
                    <div className="bottom">
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                        <img src={Phil} />
                    </div>
                </div>
                <div className="timeline">
                    {posts.map(i => {
                        return (
                            <div className="post">
                                <div className="top">
                                    <div className="pic" >
                                        <img src={Phil} />
                                    </div>
                                    <div className="nameTime" >
                                        <h4>{i.name}</h4>
                                        <p>{i.time}</p>
                                    </div>
                                    <div className="dots" >
                                        <div style={{ width: "30px", height: "30px", background: "grey" }} ></div>
                                    </div>
                                </div>
                                <div className="middle">
                                    <p>{i.text}</p>
                                </div>
                                <div className="recom">
                                    <div className="reactions" >
                                        <p>{i.reactions}</p>
                                    </div>
                                    <div className="comments" >
                                        <p>{i.reactions} comments</p>
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
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="right" >
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
            </div>
        </Container>
    );
}

export default Homes;