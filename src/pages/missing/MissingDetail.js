import React, { useState, useEffect } from "react";
import '../../css/Missing.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Banner from '../../components/Banner';
import MissingTag from '../../components/MissingTag';
import axios from "axios";

function MissingDetail(props) {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const { postId } = useParams();
    const [data, setData] = useState(null); // 포스트 데이터를 저장할 상태
    console.log(postId);
    
     useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(
            `http://52.78.109.86:8080/losts/${postId}/`
            );
            const postData = response.data; // 서버에서 받아온 포스트 데이터
            setData(postData);
            console.log(postData);
        }   catch (error) {
            console.log(error);
        }
        };
        fetchData();
    }, [postId]);

    if (!data) {
        return <div>Loading...</div>; // 데이터가 로드되기 전에 로딩 중 메시지 출력
    }


    return (
        <>
        <Banner/>
        <div key={data.id}>
        <div style={{ overflowX: 'hidden', overflowY: 'auto', height: '725px'}}>
        <div id="written">
            <img src={process.env.PUBLIC_URL + '/assets/icons/profile.png'}  id="profile" alt="profile"/>
            <div id="information">
                <p id="writer">{data.writer_username}</p>
                <p id="time">2023-08-10 23:24  조회 104</p>
            </div>
            <button
                    style={{
                        position: 'absolute',
                        marginLeft: '70px',
                        marginTop: '30px',
                        border: 'none',
                        backgroundColor: 'white',
                    }}
                    onClick={handleLikeClick}
                >
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            (liked ? '/assets/icons/like2.png' : '/assets/icons/like3.png')
                        }
                        id="likeButton"
                        alt="likeButton"
                    />
                </button>
        </div>

            <div id="md_container1">
                <img src={data.image1} id="md_photo1" alt="m2"/>
            </div>

            <hr id="hr"/>

            <div id="text">
                <p id="misstitle">{data.title}</p>
                <p id="content">{data.content}</p>
            </div>
            <Link to="/Missing/WrtieMissing">
                <img src={process.env.PUBLIC_URL + '/assets/icons/floatingchat.png'} alt="floatingchat" 
                style={{marginLeft : '300px', marginTop:'80px',float: 'right', position:'fixed'}}/>
            </Link>

        <MissingTag postData={data}/>
        </div></div>
        </>
    );
}

export default MissingDetail;