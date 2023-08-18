import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../css/Adoption.css";
import Banner from "../../components/Banner";
//import LikeBtn from '../../components/LikeBtn';

const GreenBtn = styled.button`
  color: white;
  background: #00ac78;
  border: 0.5px solid #00ac78;
  border-radius: 10px;
  display: inline-block;
  position: absolute;
  width: 237px;
  height: 45px;
  margin: 100px -10px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const WhiteBtn = styled.button`
  color: #00ac78;
  background: white;
  border: 0.5px solid #00ac78;
  border-radius: 10px;
  display: inline-block;
  width: 115px;
  height: 45px;
  margin: 100px 20px 0px 15px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

function AdoptDetail2() {
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
          `http://52.78.109.86:8080/userposts/${postId}/`
        );
        const postData = response.data; // 서버에서 받아온 포스트 데이터
        setData(postData);
        console.log(postData);
      } catch (error) {
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
      <Banner />
      <div key={data.id}>
        <div id="ad_container">
          <img src={data.image1} id="ad_photo" alt="detail_photo" />
        </div>
        <button
          style={{
            position: "absolute",
            marginLeft: "320px",
            marginTop: "-205px",
            border: "none",
            backgroundColor: "transparent",
          }}
          onClick={handleLikeClick}
        >
          <img
            src={
              process.env.PUBLIC_URL +
              (liked ? "/assets/icons/like2.png" : "/assets/icons/like3.png")
            }
            id="likeButton"
            alt="likeButton"
          />
        </button>
      </div>

      <div id="detail_main">
        <p id="detail_name">{data.name}</p>
        <p id="detail_info">
          {data.kind} | {data.gender}({data.is_neutered}) | {data.age} |{" "}
          {data.weight}
        </p>
      </div>

      <div id="summary">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/balloon.png"}
          id="balloon"
          alt="balloon"
        />
        <p id="ballooncontents">{data.content}</p>
        <p id="from">{data.writer_username} 한마디</p>
      </div>

      <div id="progress">
        {/* <p>공고기간</p> */}
        <p>
          보호센터
          <span>
            {data.writer_address1} {data.writer_username}
          </span>
        </p>
        <p id="place"> * 정확한 위치는 입양 확정 후 안내됩니다.</p>
        <p>
          특이사항 <span>{data.alert}</span>
        </p>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/assets/icons/floatingchat.png"}
        alt="floatingchat"
        style={{
          marginLeft: "310px",
          marginTop: "-20px",
          float: "right",
          position: "fixed",
          zIndex: "1000",
        }}
      />

      <div id="gotoread">
        <Link to="/Guidance/Agreement">
          <p id="mark_p">입양 전 필독사항 바로가기</p>
        </Link>
      </div>

      <div>
        <WhiteBtn>공유하기</WhiteBtn>
        <Link to="/">
          <GreenBtn>입양 문의하기</GreenBtn>
        </Link>
      </div>
    </>
  );
}

export default AdoptDetail2;
