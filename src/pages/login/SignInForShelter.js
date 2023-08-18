import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  // SignInForm2에서 입력한 값들을 상태로 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // confirmPassword: "",
    sheltername: "",
    address1: "",
    address2: "",
    phone: "",
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
    const {
      email,
      password,
      sheltername,
      address1,
      address2,
      phone,
    } = formData; // 특정 필드만 추출

    const dataToSend = {
      email: email,
      username: sheltername,
      password: password,
      address1: address1,
      address2: address2,
      phone: phone,
    };

    console.log("전송할 formData:", dataToSend);
    // axios POST 요청을 사용하여 formData를 서버로 보냅니다.

    axios
      .post("http://52.78.109.86:8080/accounts/manager/signin/", dataToSend, {
        headers: {
          "Content-Type": "application/json", // JSON 데이터 전송을 위한 헤더 설정
        },
      })
      .then((response) => {
        // 성공 응답을 처리합니다.
        console.log("회원가입 성공:", response.data);
        navigate("/Login"); // Login 페이지로 리다이렉트합니다.
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
            className="invisibleContent"
          />
          <span>회원가입</span>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            id="exitBtn"
            onClick={handleExitClick}
          />
        </div>
        <SignInForm2
          formData={formData}
          onFormDataChange={handleFormDataChange}
        />
        <SignInCheckbox2
          formData={formData}
          onCheckboxChange={handleCheckboxChange}
          onFormSubmit={handleCompleteSignInClick}
        />
      </ScrollableDiv>
    </>
  );
};

export default SignInForShelter;
export { ScrollableDiv };
