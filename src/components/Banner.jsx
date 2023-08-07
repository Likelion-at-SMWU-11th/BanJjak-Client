import React from 'react';
import styled from "styled-components";
import '../css/Banner.css';

const BtnList = styled.button`
    color: grey;
    background : white;
    border: 0.5px solid grey;
    display : inline-block;
    width : 97.5px;
    height : 30px;
    text-align : center;
    font-size : 10px;
`

const Banner = () => {
    return (
        <>
        <div id="BannerBar">
            <img src={process.env.PUBLIC_URL + '/assets/icons/my.png'} id="my"/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/logo2.png'} id="logo2"/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/search1.png'} id="search1"/>           
        </div>
        <div id="BannerBtn">
            <div>
                <BtnList>반짝소개</BtnList>
                <BtnList>반짝활동</BtnList>
                <BtnList>공지사항</BtnList>
                <BtnList>입양안내</BtnList>
                </div>
                <div>
                <BtnList>입양하기</BtnList>
                <BtnList>실종/목격</BtnList>
                <BtnList>임시보호</BtnList>
                <BtnList>입양후기</BtnList>
                </div>
        </div>
        </>
    );
};

export default Banner;