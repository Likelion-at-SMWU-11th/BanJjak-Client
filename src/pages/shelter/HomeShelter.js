import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  return (
    <>
      <div class="logoDiv">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/logo_top_text.png"}
          />
        </div>
        <p id="shelterName">멋사네 보호소</p>
        <p id="pageText">관리자용 페이지</p>
      </div>
      <div style={btnContainer}>
        <HomeShelterBtn2>
          <Link to="/HomeShelter/ShelterPosting">입양 공고글 쓰기</Link>
        </HomeShelterBtn2>
        <HomeShelterBtn>내 정보 수정</HomeShelterBtn>
      </div>
      <div id="telInfo">
        <p>문의</p>
        <p id="shelterTel">02-710-1234</p>
      </div>
    </>
  );
};

export default HomeShelter;
