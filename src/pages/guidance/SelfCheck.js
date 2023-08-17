import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import '../../css/Guidance.css';

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
        margin-top : 1rem;
        margin-bottom : 1rem;
    }

    + label:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0px;
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

function SelfCheck(props) {
    return (
        <div>
            <img src={process.env.PUBLIC_URL +'/assets/icons/selfcheck.png'} id="gs_banner" alt="gs_banner"/>
        
            <form id="gs_form1">
                <CustomCheckbox type="checkbox" id="gs_check1"/><label htmlFor="gs_check1">동물 털 알레르기가 있진 않으신가요?</label><br/>
                <CustomCheckbox type="checkbox" id="gs_check2"/><label htmlFor="gs_check2">이사, 결혼, 임신, 유학 등 가정환경이 바뀌어도<br/>끝까지 책임질 수 있다는 결심이 섰나요?</label><br/>
                <CustomCheckbox type="checkbox" id="gs_check3"/><label htmlFor="gs_check3">함께 지내는 가족 구성원과 합의가 되었나요?</label><br/>
                <CustomCheckbox type="checkbox" id="gs_check4"/><label htmlFor="gs_check4">산책, 놀이 등 돌볼 시간이 충분하신가요?</label><br/>
                <CustomCheckbox type="checkbox" id="gs_check5"/><label htmlFor="gs_check5">입양 이후 꾸준히 발생할 양육비용을<br/>감당하실 의사와 능력이 있으신가요?</label><br/>
                <CustomCheckbox type="checkbox" id="gs_check6"/><label htmlFor="gs_check6">반려동물이 아플 때 병원에 데려가고<br/>보살필 의사와 능력이 있으신가요?</label><br/>
                <CustomCheckbox type="checkbox" id="gs_check7"/><label htmlFor="gs_check7">현재 키우고 있는 반려동물과 새로 맞이할 동물이<br/>잘 어울릴 수 있을지 생각해 보셨나요?</label><br/>
                <Link to="/Home"><input type="button" id="gs_btn" value="완료하기"/></Link>
            </form>
        </div>
    );
}

export default SelfCheck;