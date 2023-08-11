import React from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/SignInForm";
import SignInCheckbox from "../../components/SignInCheckbox";

const SignInForCommon = () => {
  const navigate = useNavigate();

  const handleExitClick = () => {
    // SignIn 페이지로 이동
    navigate("/SignIn");
  };

  return (
    <>
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

      <SignInForm />
      <SignInCheckbox />
    </>
  );
};

export default SignInForCommon;
