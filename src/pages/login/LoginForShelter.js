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

  //로그인 성공시
  const handleLoginSuccess = (token) => {
    const managerToken = token;
    console.log("로그인 성공", managerToken);
    // HomeShelter로 페이지 이동 및 토큰 전달
    localStorage.setItem("token", token);
    navigate("/HomeShelter", { state: { managerToken } });
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
      <LoginForm2 onLoginSuccess={handleLoginSuccess} />
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
