import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SignInForm from "../../components/SignInForm";
import SignInCheckbox, {
  CompleteSignInBtn,
} from "../../components/SignInCheckbox";
import { ScrollableDiv } from "./SignInForShelter";

const SignInForCommon = () => {
  const navigate = useNavigate();

  const handleExitClick = () => {
    // SignIn 페이지로 이동
    navigate("/SignIn");
  };

  // SignInForm에서 입력한 값들을 상태로 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phoneNumber: "",
    terms: {
      all: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    },
  });

  const handleFormDataChange = (inputName, inputValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [inputName]: inputValue,
    }));
  };

  const handleCheckboxChange = (checkboxName, isChecked) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      terms: {
        ...prevFormData.terms,
        [checkboxName]: isChecked,
      },
    }));
  };

  const handleCompleteSignInClick = (formData) => {
    console.log("회원가입 정보를 서버로 전송합니다.");
    // axios POST 요청을 사용하여 formData를 서버로 보냅니다.
    axios
      .post("http://127.0.0.1:8000/accounts/user/signin/", formData)
      .then((response) => {
        // 성공 응답을 처리합니다.
        console.log("회원가입 성공:", response.data);
        navigate("/SignIn"); // SignIn 페이지로 리다이렉트합니다.
      })
      .catch((error) => {
        // 오류 응답을 처리합니다.
        console.error("회원가입 실패:", error);
      });
  };

  return (
    <>
      <ScrollableDiv>
        <div id="TopBar">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            class="invisibleContent"
          />
          <span>회원가입</span>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            id="exitBtn"
            onClick={handleExitClick}
          />
        </div>

        <SignInForm
          formData={formData}
          onFormDataChange={handleFormDataChange}
        />
        <SignInCheckbox
          formData={formData}
          onCheckboxChange={handleCheckboxChange}
          onFormSubmit={handleCompleteSignInClick}
        />
      </ScrollableDiv>
    </>
  );
};

export default SignInForCommon;
