import React from 'react';
import styled from "styled-components";
import { CustomCheckbox, CheckboxContainer, SubmitBtn} from "./LoginForm";

const Container = styled(CheckboxContainer)`
    display: block;
    width: 19.5rem; /* 전체 폭 차지 */

`

const AllCheck = styled(CustomCheckbox)`
  + label {
    position: relative;
    padding-left: 3.5rem;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: #3e3e3e;
  }

  + label:before {
    content: "";
    position: absolute;
    left: 1.5rem;
    top: -2px;
    width: 20px;
    height: 20px;
    background-image: url('${process.env.PUBLIC_URL}/assets/icons/noncheck.png'); /* public 폴더 내 이미지 경로 설정 */
    background-repeat: no-repeat;
    background-size: cover;
}
`;

const EachCheck=styled(AllCheck)`

+ label {
    font-size: 12px;
    font-weight: 400;
  }

+ label:before {
    top: 0;
    width: 15px;
    height: 15px;
}
`

const CompleteSignInBtn=styled(SubmitBtn)`
    display: block;
    width: 100%;
`

const hrStyle={
    margin:"1rem 0"
}

const termDiv={
    boxSizing:"content-box",
    padding:"0.5rem 1.5rem"
}


const SignInCheckbox = () => {
    return (
        <>
            <Container>
                <AllCheck type="checkbox" id="all" />
                <label htmlFor="all">약관 전체 동의</label>
            </Container>
            <hr style={hrStyle}/>
                <Container>
                    <EachCheck type="checkbox" id="check1" name="term"/>
                    <label htmlFor="check1">(필수) 본인은 만 14세 이상입니다.</label>
                </Container>
                <Container>
                    <EachCheck type="checkbox" id="check2" name="term"/>
                    <label htmlFor="check2">(필수) 서비스 이용약관 동의</label>
                </Container>
                <Container>
                    <EachCheck type="checkbox" id="check3" name="term"/>
                    <label htmlFor="check3">(필수) 개인정보 수집 및 이용 동의</label>
                </Container>
                <Container>
                    <EachCheck type="checkbox" id="check4" name="term"/>
                    <label htmlFor="check4">(선택) 광고성 정보 수신 전체 동의</label>
                </Container>
                <div style={termDiv}>
                <CompleteSignInBtn>동의하고 가입하기</CompleteSignInBtn>
            </div>
        </>
    );
};

export default SignInCheckbox;