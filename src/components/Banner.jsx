import React, { useState } from 'react';
import styled from "styled-components";
import '../css/Banner.css';
import { Link } from "react-router-dom";

const BtnList = styled.button`
    color: grey;
    background : white;
    border: 1px solid #BCBCBC;
    display : inline-block;
    width : 25%;
    height : 30px;
    text-align : center;
    font-size : 12px;
    font-weight : bold;
`



const Banner = (props) => {
    return (
        <>
        <div id="BannerBar">
            <Link to="/MyPage"><img src={process.env.PUBLIC_URL + '/assets/icons/my.png'} id="my" alt="my"/></Link>
            <Link to="/Home"><img src={process.env.PUBLIC_URL + '/assets/icons/logo2.png'} id="logo2" alt="logo2"/></Link>
            <img src={process.env.PUBLIC_URL + '/assets/icons/logout2.png'} id="logout2" alt="logout"/>           
        </div>
        <div id="BannerBtn">
            <div>
                <Link to="/Introduction"><BtnList>반짝소개</BtnList></Link>
                <Link to="/Activity"><BtnList >반짝활동</BtnList></Link>
                <Link to="/Notice"><BtnList >공지사항</BtnList></Link>
                <Link to="/Guidance"><BtnList >입양안내</BtnList></Link>
                </div>
                <div>
                <Link to="/Adoption"><BtnList >입양하기</BtnList></Link>
                <Link to="/Missing"><BtnList >실종/목격</BtnList></Link>
                <Link to="/Protection"><BtnList >임보요청</BtnList></Link>
                <Link to="/Review"><BtnList >입양후기</BtnList></Link>
                </div>
        </div>
        </>
    );
};

export default Banner;
export {BtnList};