import React from 'react';
import styled from 'styled-components';


const formStyle={
    padding: "1.5rem",
    paddingBottom:"0.3rem",
    boxSizing: "content-box"
}

const InputDiv=styled.div`
    width: 100%;
    color: #828282;
    margin-bottom: 1.8rem;
    p {
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 7px;
    }

    input {
        display: block;
        width: 100%;
        border: 1px solid #828282;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 0.3rem;
    }

    input::placeholder {
        color: #BCBCBC
    }

`;


const SignInForm = ({ formData, onFormDataChange }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onFormDataChange(name, value);  //부모 컴포넌트로 데이터 변경을 알림
  };

  //비밀번호 재입력 확인
  const isPasswordMismatched = formData.password !== formData.confirmPassword;

    return (
        <>
          <form style={formStyle}>
              <InputDiv>
                <p>이메일</p>
                <input type="email" name="email" placeholder="likelion@likelion.com" value={formData.email} onChange={handleInputChange}/>
              </InputDiv>
              <InputDiv>
                <p>비밀번호</p>
                <input type="password" name="password" placeholder="영문/숫자/특수문자 혼합 8~20자"  value={formData.password} onChange={handleInputChange}/>
                <input type="password" name="confirmPassword" placeholder="비밀번호를 한 번 더 입력해 주세요." 
                
                />
              </InputDiv>
              <InputDiv>
                <p>닉네임</p>
                <input type="text" name="nickname" value={formData.nickname} onChange={handleInputChange} placeholder="2~16자 이내로 입력해 주세요." />
              </InputDiv>
              <InputDiv>
                <p>연락처</p>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="'-' 를 포함하여 입력해 주세요." />
              </InputDiv>
          </form>
          
        </>
    );
};

export default SignInForm;