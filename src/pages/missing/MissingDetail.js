import React, { useState } from "react";
import "../../css/Missing.css";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import MissingTag from "../../components/MissingTag";
import axios from "axios";

function MissingDetail(props) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    //setLiked(!liked);
    if (liked) {
      axios
        .delete("http://127.0.0.1:8000/likes/losts/delete/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          data: {
            id: props.id, // Replace with the actual lost item id
          },
        })
        .then(() => setLiked(false))
        .catch((error) => {
          console.error("Error deleting like:", error);
          // Handle error appropriately
        });
    } else {
      axios
        .post(
          "http://127.0.0.1:8000/likes/losts/add/",
          {
            id: props.id, // Replace with the actual lost item id
          },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => setLiked(true))
        .catch((error) => {
          console.error("Error adding like:", error);
          // Handle error appropriately
        });
    }
  };

  return (
    <>
      <Banner />

      <div style={{ overflowX: "hidden", overflowY: "auto", height: "725px" }}>
        <div id="written">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/profile.png"}
            id="profile"
            alt="profile"
          />
          <div id="information">
            <p id="writer">아이디</p>
            <p id="time">2023-08-10 23:24 조회 104</p>
          </div>
          <button
            style={{
              position: "absolute",
              marginLeft: "70px",
              marginTop: "30px",
              border: "none",
              backgroundColor: "white",
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

        <div id="md_container1">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/missingdog1.png"}
            id="md_photo1"
            alt="m2"
          />
        </div>
        <div id="md_container2">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/missing2.png"}
            id="md_photo2"
            alt="m2"
          />
        </div>

        <hr id="hr" />

        <div id="text">
          <p id="misstitle">용산경찰서 근처에서 요키를 놓쳤습니다</p>
          <p id="content">
            동물병원 다녀오는 길에 용산경찰서 근처에서 놓쳤습니다 나이가 많아
            귀도 잘 안 들리고 최근 건강이 안 좋아져서 너무 걱정됩니다 <br />
            요키 치고는 색이 밝고 꿀벌하네스를 하고 있었어요 <br />
            인근에서 닮은 강아지 발견하신다면 시간대 상관없이 꼭 연락
            부탁드립니다
          </p>
        </div>
        <Link to="/Missing/WrtieMissing">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/floatingchat.png"}
            alt="floatingchat"
            style={{
              marginLeft: "300px",
              marginTop: "80px",
              float: "right",
              position: "fixed",
            }}
          />
        </Link>

        <MissingTag />
      </div>
    </>
  );
}

export default MissingDetail;
