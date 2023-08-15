import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { UserSelectButtonForShelter } from "./UserTypeSelect";
import { useNavigate } from "react-router-dom";

const StyledInput = styled.input`
  display: block;
  flex: 1;
  border: 1px solid #828282;
  border-radius: 5px 5px 0px 0px;
  padding: 15px;
  width: 18rem;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
`;

const StyledPasswordInput = styled.div`
  position: relative;
  width: 18rem;
  margin-left: 0; /* 왼쪽으로 이동하는 여백 설정 */

  input {
    width: 100%;
    border: 1px solid #828282;
    border-top: none;
    border-radius: 0px 0px 5px 5px;
    padding: 15px;
    font-weight: 600;
    font-size: 15px;
    line-height: normal;
  }

  img {
    position: absolute;
    top: 50%;
    right: 5%;
    margin: 0;
    transform: translateY(-50%); /* 세로 중앙 정렬 */
  }
`;

const CenteredForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  width: 19.5rem; /* 전체 폭 차지 */
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CustomCheckbox = styled.input`
  /* 체크박스를 숨기고 커스텀 스타일을 적용 */
  display: none;

  + label {
    position: relative;
    padding-left: 30px;
    padding-right: 15px;
    cursor: pointer;
    font-size: 14px;
    color: #3e3e3e;
  }

  + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: -3px;
    width: 20px;
    height: 20px;
    background-image: url("${process.env
      .PUBLIC_URL}/assets/icons/noncheck.png"); /* public 폴더 내 이미지 경로 설정 */
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:checked + label:before {
    background-image: url("${process.env
      .PUBLIC_URL}/assets/icons/check.png"); /* public 폴더 내 이미지 경로 설정 */
  }
`;

const SubmitBtn = styled(UserSelectButtonForShelter)`
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  width: 20rem;
  padding: 13px;
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [rememberId, setRememberId] = useState(false);

  const handleLogin = async (email, password, rememberMe, rememberId) => {
    try {
      await axios
        .post(
          "http://127.0.0.1:8000/accounts/user/login/",
          {
            email: email,
            password: password,
            remember_me: rememberMe,
            remember_id: rememberId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              // Add any other headers if needed
            },
          }
        )
        .then((response) => {
          console.log("response");
          if (response.status === 200) {
            // 로그인 성공 시 리다이렉트 또는 상태 업데이트 등 처리
            console.log("로그인 성공:", response.data);
            navigate("/Home");
          }
        });
    } catch (error) {
      // 로그인 실패 시 에러 처리
      navigate("/Home");
    }
  };

  return (
    <>
      <CenteredForm>
        <StyledInput
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledPasswordInput>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={process.env.PUBLIC_URL + "/assets/icons/visible.png"} />
        </StyledPasswordInput>
        <CheckboxContainer>
          <CustomCheckbox
            type="checkbox"
            id="autoLoginCheck"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="autoLoginCheck">자동로그인</label>
          <CustomCheckbox
            type="checkbox"
            id="saveIdCheck"
            checked={rememberId}
            onChange={() => setRememberId(!rememberId)}
          />
          <label htmlFor="saveIdCheck">아이디 저장</label>
        </CheckboxContainer>
        <SubmitBtn
          onClick={() => handleLogin(email, password, rememberMe, rememberId)}
        >
          로그인
        </SubmitBtn>
      </CenteredForm>
    </>
  );
};

export default LoginForm;
export { CustomCheckbox };
export { CheckboxContainer };
export { SubmitBtn };
