import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SignInForm from "../../components/SignInForm";
import SignInCheckbox, {
  CompleteSignInBtn,
} from "../../components/SignInCheckbox";

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

      <SignInForm formData={formData} onFormDataChange={handleFormDataChange} />
      <SignInCheckbox
        formData={formData}
        onCheckboxChange={handleCheckboxChange}
      />
    </>
  );
};

export default SignInForCommon;
