import React from 'react';
import styled from 'styled-components';
import { UserSelectButtonForShelter } from './UserTypeSelect';

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
        position : absolute;
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
        color: #3E3E3E;
    }

    + label:before {
        content: "";
        position: absolute;
        left: 0;
        top: -3px;
        width: 20px;
        height: 20px;
        background-image: url('${process.env.PUBLIC_URL}/assets/icons/noncheck.png'); /* public 폴더 내 이미지 경로 설정 */
        background-repeat: no-repeat;
        background-size: cover;
    }

    &:checked + label:before {
        background-image: url('${process.env.PUBLIC_URL}/assets/icons/check.png'); /* public 폴더 내 이미지 경로 설정 */
    }
`;

const SubmitBtn = styled(UserSelectButtonForShelter)`
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    width: 20rem;
    padding: 13px;
`

const LoginForm = () => {
    
    return (
        <>
        <CenteredForm>
            <StyledInput type="text" placeholder="이메일"/>
            <StyledPasswordInput>
                <input type="password" placeholder="비밀번호"/>
                <img src={process.env.PUBLIC_URL + "/assets/icons/visible.png"}/>
            </StyledPasswordInput>
            <CheckboxContainer>
                <CustomCheckbox type="checkbox" id="autoLoginCheck" />
                <label htmlFor="autoLoginCheck">자동로그인</label>
                <CustomCheckbox type="checkbox" id="saveIdCheck" />
                <label htmlFor="saveIdCheck">아이디 저장</label>
            </CheckboxContainer>
            <SubmitBtn >로그인</SubmitBtn>
        </CenteredForm>
        </>
    );
};

export default LoginForm;
export {CustomCheckbox};
export {CheckboxContainer};
export {SubmitBtn};









