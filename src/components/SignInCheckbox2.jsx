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
    font-size: 19px;
    font-weight: 600;
    color: #3e3e3e;
  }

  + label:before {
    content: "";
    position: absolute;
    left: 1.5rem;
    top: -2px;
    width: 25px;
    height: 25px;
    background-image: url('${process.env.PUBLIC_URL}/assets/icons/noncheck.png'); /* public 폴더 내 이미지 경로 설정 */
    background-repeat: no-repeat;
    background-size: cover;
}
`;

const EachCheck=styled(AllCheck)`

+ label {
    font-size: 18px;
    font-weight: 400;
  }

+ label:before {
    top: 0;
    width: 20px;
    height: 20px;
}
`

const CompleteSignInBtn=styled(SubmitBtn)`
    font-size:25px;
    margin-bottom:1rem;
    flex: 1; /* 버튼이 사용 가능한 공간을 차지하도록 설정 */
`

const hrStyle={
    margin:"1rem 0"
}

const termDiv={
    margin:"0.5rem 1.5rem",
    display: "flex", /* 플렉스박스 사용하여 레이아웃 제어 */
    alignItems: "center", /* 아이템을 수직 가운데 정렬 */
}


const SignInCheckbox2 = ({ formData, onCheckboxChange, onFormSubmit }) => {

    const handleCheckboxInputChange = (event) => {
        const { id, checked } = event.target;

        if (id === "all") {
            const updatedTerms = Object.keys(formData.terms).reduce((acc, term) => {
              acc[term] = checked;
              return acc;
            }, {});
      
            onCheckboxChange("all", checked);
            onCheckboxChange("check1", checked);
            onCheckboxChange("check2", checked);
            onCheckboxChange("check3", checked);
            onCheckboxChange("check4", checked);
          } else {
            onCheckboxChange(id, checked);
          }
    };

    const handleCompleteSignInClick = () => {
        const checkedTermCheckboxIds = ["check1", "check2", "check3"];
        const uncheckedTermCheckboxIds = checkedTermCheckboxIds.filter(
          (checkboxId) => !formData.terms[checkboxId]
        );

        if (uncheckedTermCheckboxIds.length > 0) {
          alert("필수 약관에 동의해야 가입할 수 있습니다.");
        } else {
          console.log("회원가입 정보를 서버로 전송합니다.");
          onFormSubmit(formData); // formData를 SignInForCommon 컴포넌트로 전달하여 서버로 보냅니다.
        }
    };

    return (
        <>
            <Container>
                <AllCheck type="checkbox" id="all" checked={formData.terms.all} onChange={handleCheckboxInputChange}/>
                <label htmlFor="all">약관 전체 동의</label>
            </Container>
            <hr style={hrStyle}/>
                <Container>
                    <EachCheck type="checkbox" id="check1" name="term" checked={formData.terms.check1} onChange={handleCheckboxInputChange}/>
                    <label htmlFor="check1">(필수) 본인은 만 14세 이상입니다.</label>
                </Container>
                <Container>
                    <EachCheck type="checkbox" id="check2" name="term" checked={formData.terms.check2} onChange={handleCheckboxInputChange}/>
                    <label htmlFor="check2">(필수) 서비스 이용약관 동의</label>
                </Container>
                <Container>
                    <EachCheck type="checkbox" id="check3" name="term" checked={formData.terms.check3} onChange={handleCheckboxInputChange}/>
                    <label htmlFor="check3">(필수) 개인정보 수집 및 이용 동의</label>
                </Container>
                <Container>
                    <EachCheck type="checkbox" id="check4" name="term" checked={formData.terms.check4} onChange={handleCheckboxInputChange}/>
                    <label htmlFor="check4">(선택) 광고성 정보 수신 전체 동의</label>
                </Container>
                <div style={termDiv}>
                <CompleteSignInBtn onClick={handleCompleteSignInClick}>동의하고 가입하기</CompleteSignInBtn>
                </div>
        </>
    );
};

export default SignInCheckbox2;