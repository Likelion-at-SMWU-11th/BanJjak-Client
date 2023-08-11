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


const SignInForm = () => {
    return (
        <>
          <form style={formStyle}>
              <InputDiv>
                <p>이메일</p>
                <input type="email" placeholder="likelion@likelion.com"/>
              </InputDiv>
              <InputDiv>
                <p>비밀번호</p>
                <input type="password" placeholder="영문/숫자/특수문자 혼합 8~20자"/>
                <input type="password" placeholder="비밀번호를 한 번 더 입력해 주세요."/>
              </InputDiv>
              <InputDiv>
                <p>닉네임</p>
                <input type="text" placeholder="2~16자 이내로 입력해 주세요."/>
              </InputDiv>
              <InputDiv>
                <p>연락처</p>
                <input type="tel" placeholder="'-' 를 제외한 숫자만 입력해 주세요."/>
              </InputDiv>
          </form>
          
        </>
    );
};

export default SignInForm;