import React from 'react';
import { useNavigate } from "react-router-dom";
import ShelterPostList from '../../components/ShelterPostList';

const ShelterPostsList = () => {
  const navigate = useNavigate();

    const handleExitClick = () => {
        // Adoption 페이지로 이동
        navigate("/HomeShelter");
    };
  return (
      <>
        <div id="TopBar">
            <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
             id="exitBtn"
            class="invisibleContent"
        />
        <span>내가 쓴 글 보기</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>

        <ShelterPostList/>
        <ShelterPostList/>
        <ShelterPostList/>
        <ShelterPostList/>
    </>
  );
};

export default ShelterPostsList;