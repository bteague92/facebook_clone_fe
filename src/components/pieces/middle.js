import React, { useState } from 'react';
import styled from 'styled-components';
import fbLogo from "../../images/facebookLogo.JPG";
import Logo from "../../images/logo.JPG";
import StoryOne from "../../images/storyOne.JPG";
import Phil from "../../images/phil.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faVideo, faImages, faSmile, faChevronCircleDown, faCalendarWeek, faHistory, faBookmark, faFlag, faHome, faUsers, faTv, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Post from "../pieces/post.js";

const Container = styled.div`
        width: 700px;
        padding: 0 30px;

        @media(max-width: 1100px){
            width: 70vw;
        }

        @media(max-width: 900px){
            width: 95vw;
        }

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
            }
        }
`;

const Middle = (props) => {

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
                        <Post name={i.name} time={i.time} text={i.text} reactions={i.reactions} />
                    )
                })}
            </div>
        </Container>
    );
}

export default Middle;