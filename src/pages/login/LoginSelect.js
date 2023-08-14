import React from "react";
import { Link } from "react-router-dom";
import "../../css/SignInSelect.css";
import UserTypeSelect from "../../components/UserTypeSelect";

const SignInSelect = () => {
  return (
    <>
      <div class="loginMain">
        <div class="logoDiv">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/logo_top_text.png"}
            />
          </div>
          <p id="mainLogo">반짝</p>
          <div>
            <p id="signInText">로그인</p>
          </div>
        </div>
        <UserTypeSelect />
        <p id="goLogin">
          계정이 없으시다면 <Link to="/SignIn">회원가입하기</Link>
        </p>
      </div>
    </>
  );
};

export default SignInSelect;
