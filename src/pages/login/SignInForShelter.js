import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignInCheckbox2 from "../../components/SignInCheckbox2";
import SignInForm2 from "../../components/SignInForm2";

const ScrollableDiv = styled.div`
  height: 100vh;
  overflow: auto;
`;

const SignInForShelter = () => {
  const navigate = useNavigate();

  const handleExitClick = () => {
    // SignIn 페이지로 이동
    navigate("/SignIn");
  };

  return (
    <>
      <ScrollableDiv>
        <div id="TopBar">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            id="invisibleContent"
          />
          <span>회원가입</span>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            id="exitBtn"
            onClick={handleExitClick}
          />
        </div>
        <SignInForm2 />
        <SignInCheckbox2 />
      </ScrollableDiv>
    </>
  );
};

export default SignInForShelter;
export { ScrollableDiv };
