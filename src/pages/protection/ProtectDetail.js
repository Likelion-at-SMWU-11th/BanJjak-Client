import React, { useState, useEffect } from "react";
import "../../css/Protection.css";
import Banner from "../../components/Banner";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProtectDetail(props) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const { postId } = useParams();
  const [data, setData] = useState(null); // 포스트 데이터를 저장할 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/requests/${postId}/`
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

      <div style={{ overflowX: "hidden", overflowY: "auto", height: "725px" }}>
        <div id="written">
          <div style={rowDiv}>
            <div style={imgContainerStyle}>
              <img
                src={"http://127.0.0.1:8000" + data.writer_profile}
                // id="profile"
                style={imgStyle}
                alt="profile"
              />
            </div>
            <div id="information">
              <p id="writer">{data.writer_username}</p>
              <p id="time">2023-08-10 23:24 조회 104</p>
            </div>
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                marginLeft: "5rem",
              }}
              onClick={handleLikeClick}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (liked
                    ? "/assets/icons/like2.png"
                    : "/assets/icons/like3.png")
                }
                id="likeButton"
                alt="likeButton"
              />
            </button>
          </div>
        </div>

        <div id="pd_container1">
          <img src={data.image1} id="pd_photo1" alt="m2" />
        </div>

        <hr id="hr" />

        <div id="text">
          <p id="protect_title">{data.title}</p>
          <p id="content">{data.content}</p>
        </div>

        <Link to="">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/floatingchat.png"}
            alt="floatingchat"
            style={{
              marginLeft: "310px",
              marginTop: "-20px",
              float: "right",
              position: "fixed",
            }}
          />
        </Link>

        <div id="property">
          <p id="property_name">동물정보</p>
          <ul>
            <li>
              <span>{data.name}, </span>
              <span>
                {data.gender}({data.is_neutered}),{" "}
              </span>
              <span>{data.age}, </span>
              <span>{data.weight}, </span>
              <span>{data.reason} </span>
            </li>
            <p id="property_name">특이사항</p>
            <li>{data.alert}</li>
            <p id="property_name">임보조건</p>
            <li>{data.condition}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProtectDetail;

const imgContainerStyle = {
  width: "60px",
  height: "60px",
  border: "transparent",
  borderRadius: "10px",
  overflow: "hidden",
  marginTop: "20px",
  marginLeft: "20px",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const rowDiv = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
