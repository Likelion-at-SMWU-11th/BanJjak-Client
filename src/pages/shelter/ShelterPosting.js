import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Posting from "../../components/Posting";
import { ScrollableDiv } from "../login/SignInForShelter";

const ShelterPosting = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    // Login 페이지로 이동
    navigate("/HomeShelter");
  };

  return (
    <>
      <ScrollableDiv>
        <div id="TopBar">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            id="exitBtn"
            className="invisibleContent"
          />
          <span>입양 공고글 쓰기</span>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            id="exitBtn"
            onClick={handleExitClick}
          />
        </div>
        <Posting />
      </ScrollableDiv>
    </>
  );
};

export default ShelterPosting;
