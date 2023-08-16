import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/EditInfo.css";

const ShelterEditPW = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    // 내 정보 수정 페이지로 이동
    navigate("/HomeShelter/ShelterEditInfo");
  };

  return (
    <>
      <div id="TopBar">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          className="invisibleContent"
        />
        <span>비밀번호 변경</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>

      <div id="ep_div">
        <div id="ep_p1_2">
          <p>기존 비밀번호</p>
          <form>
            <input type="text" id="ep_form1" />
          </form>
        </div>

        <div id="ep_p1_2">
          <p>새로운 비밀번호</p>
          <form>
            <input
              type="text"
              id="ep_form2"
              placeholder="영문/숫자/특수문자 혼합 8~20자"
            />
            <input
              type="text"
              id="ep_form3"
              placeholder="비밀번호를 한 번 더 입력해주세요."
            />
          </form>
        </div>

        <form>
          <button id="ep_btn2">비밀번호 변경</button>
        </form>
      </div>
    </>
  );
};

export default ShelterEditPW;
