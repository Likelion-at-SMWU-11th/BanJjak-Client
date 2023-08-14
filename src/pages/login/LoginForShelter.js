import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Login.css";

import LoginForm2 from "../../components/LoginForm2";

const LoginForShelter = () => {
  const navigate = useNavigate();

  const handleExitClick = () => {
    // Login 페이지로 이동
    navigate("/Login");
  };

  return (
    <>
      <div id="TopBar">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          id="invisibleContent"
        />
        <span>로그인</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/icons/logo3D.png"}
        id="logo"
      />
      <LoginForm2 />
      <hr />
      <div id="findForShelter">
        <Link to>아이디 찾기</Link>
        <span> | </span>
        <Link to>비밀번호 찾기</Link>
      </div>
    </>
  );
};

export default LoginForShelter;
