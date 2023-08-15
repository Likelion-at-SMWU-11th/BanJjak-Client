import React from "react";
import { Link } from "react-router-dom";
import "../../css/SignInSelect.css";
import UserTypeSelectForSignIn from "../../components/UserTypeSelectForSignIn";

const SignInSelect = () => {
  return (
    <>
      <div className="loginMain">
        <div className="logoDiv">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/logo_top_text.png"}
            />
          </div>
          <p id="mainLogo">반짝</p>
          <div>
            <p id="signInText">회원가입</p>
          </div>
        </div>
        <UserTypeSelectForSignIn />
        <p id="goLogin">
          계정이 있으시다면 <Link to="/Login">로그인하기</Link>
        </p>
      </div>
    </>
  );
};

export default SignInSelect;
