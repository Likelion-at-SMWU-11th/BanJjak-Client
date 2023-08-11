import React from 'react';
import styled from "styled-components";
import '../css/Banner.css';
import { Link } from "react-router-dom";

const BtnList = styled.button`
    color: grey;
    background : white;
    border: 0.5px solid #BCBCBC;
    display : inline-block;
    width : 97.5px;
    height : 30px;
    text-align : center;
    font-size : 12px;
    font-weight : bold;
`

const Banner = () => {
    return (
        <>
        <div id="BannerBar">
            <Link to="/MyPage"><img src={process.env.PUBLIC_URL + '/assets/icons/my.png'} id="my" alt="my"/></Link>
            <img src={process.env.PUBLIC_URL + '/assets/icons/logo2.png'} id="logo2" alt="logo2"/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/logout2.png'} id="logout2" alt="logout"/>           
        </div>
        <div id="BannerBtn">
            <div>
                <BtnList>반짝소개</BtnList>
                <BtnList>반짝활동</BtnList>
                <BtnList>공지사항</BtnList>
                <BtnList>입양안내</BtnList>
                </div>
                <div>
                <Link to="/Adoption"><BtnList>입양하기</BtnList></Link>
                <Link to="/Missing"><BtnList>실종/목격</BtnList></Link>
                <Link to="/Protection"><BtnList>임시보호</BtnList></Link>
                <BtnList>입양후기</BtnList>
                </div>
        </div>
        </>
    );
};

export default Banner;