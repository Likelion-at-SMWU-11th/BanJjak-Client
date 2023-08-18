import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "../../css/HomeShelter.css";
import styled from "styled-components";
import { UserSelectButtonForShelter } from "../../components/UserTypeSelect";

const HomeShelterBtn = styled(UserSelectButtonForShelter)`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  width: 100%;
`;

const HomeShelterBtn2 = styled(HomeShelterBtn)`
  background: white;
  color: #00ac78;
  border-radius: 20px;
  border: 5px solid #00ac78;
  padding: 30px 40px;

  a {
    color: #00ac78;
  }
`;

const btnContainer = {
  marginTop: "4rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
};

const HomeShelter = () => {
  const managerToken = localStorage.getItem("token");
  console.log("managerToken:", managerToken);

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (managerToken) {
      // 서버로 사용자 정보 요청 보내기
      axios
        .get("http://52.78.109.86:8080/users/get_username/", {
          headers: {
            Authorization: `Token ${managerToken}`,
          },
        })
        .then((response) => {
          const user = response.data;
          console.log(user);
          setUsername(user.username);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, [managerToken]);

  return (
    <>
      <div className="logoDiv">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/logo_top_text.png"}
          />
        </div>
        <p id="shelterName">{username}</p>
        <p id="pageText">관리자용 페이지</p>
      </div>
      <div style={btnContainer}>
        <HomeShelterBtn2>
          <Link to="/HomeShelter/ShelterPosting">입양 공고글 쓰기</Link>
        </HomeShelterBtn2>
        <HomeShelterBtn>
          <Link to="/HomeShelter/ShelterPostsList">내가 쓴 글 보기</Link>
        </HomeShelterBtn>
      </div>
      <div id="goEditInfoDiv">
        <Link to="/HomeShelter/ShelterEditInfo">내 정보 수정</Link>
      </div>
    </>
  );
};

export default HomeShelter;
