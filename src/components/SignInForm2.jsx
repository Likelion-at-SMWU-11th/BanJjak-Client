import React from 'react';
import styled from 'styled-components';


const formStyle={
    padding: "1.5rem",
    paddingBottom:"0.3rem",
    boxSizing: "content-box"
}

const InputDiv=styled.div`
    width: 100%;
    color: black;
    margin-bottom: 1.8rem;

    p {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 7px;
    }

    input {
        font-size: 17px;
        display: block;
        width: 100%;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 0.3rem;
    }

    input::placeholder {
        color: #828282;
    }

    span {
        color: #828282;
        font-size: 13px;
        font-weight: 400;
    }

`;


const SignInForm2 = ({ formData, onFormDataChange }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onFormDataChange(name, value);  //부모 컴포넌트로 데이터 변경을 알림
  };

    return (
        <>
          <form style={formStyle}>
              <InputDiv>
                <p>이메일</p>
                <input type="email" name="email" placeholder="likelion@likelion.com" 
                value={formData.email} onChange={handleInputChange}/>
              </InputDiv>
              <InputDiv>
                <p>비밀번호</p>
                <input type="password" name="password" placeholder="영문/숫자/특수문자 혼합 8~20자" value={formData.password} onChange={handleInputChange}/>
                <input type="password" placeholder="비밀번호를 한 번 더 입력해 주세요."/>
              </InputDiv>
              <InputDiv>
                <p>보호소명</p>
                <input type="text" name="sheltername" value={formData.sheltername} onChange={handleInputChange} placeholder="정확한 보호소명을 기입해 주세요."/>
              </InputDiv>
              <InputDiv>
                <p>보호소 주소</p>
                <input type="text" name="address1" placeholder="주소지를 구, 군까지 (Ex. 김포시 마산동) 입력해 주세요."
                value={formData.address1} onChange={handleInputChange}/>
                <input type="text" name="address2" placeholder="상세주소를 입력해 주세요."
                value={formData.address2} onChange={handleInputChange}/>
              </InputDiv>
              <InputDiv>
                <p>보호소 연락처 <span>입양 희망자에게 해당 연락처가 안내됩니다.</span></p>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="'-' 를 포함하여 입력해 주세요."/>
              </InputDiv>
          </form>
          
        </>
    );
};

export default SignInForm2;