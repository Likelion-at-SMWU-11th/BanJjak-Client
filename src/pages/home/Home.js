import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Banner from '../../components/Banner';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomePreview from '../../components/HomePreview';
import HomePreview2 from '../../components/HomePreview2';
import '../../css/Home.css';


const bannerImages = [
    'homebanner1.png',
    'homebanner2.png',
    'homebanner3.png'
];

const PreviewContainer = styled.div`
    display: flex;
    overflow-x: auto;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

function Home(props) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 2500); // 2.5초마다 배너 변경

    const timeInterval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // 1초마다 시간 업데이트

    return () => {
      clearInterval(bannerInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const formattedDate = `${currentDateTime.getFullYear()}.${String(
    currentDateTime.getMonth() + 1
  ).padStart(2, "0")}.${String(currentDateTime.getDate()).padStart(2, "0")}`;
  const formattedTime = `${String(currentDateTime.getHours()).padStart(
    2,
    "0"
  )}:${String(currentDateTime.getMinutes()).padStart(2, "0")}:${String(
    currentDateTime.getSeconds()
  ).padStart(2, "0")}`;

  return (
    <>
      <Banner />

      <div id="homebanner">
        <Carousel
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          selectedItem={currentBannerIndex}
        >
          {bannerImages.map((image, index) => (
            <div key={index}>
              <img
                src={process.env.PUBLIC_URL + `/assets/icons/${image}`}
                alt={`homebanner${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div id="homebox">
        <div id="clock">
          <p id="title_p1">실시간 유기동물 통계</p>
          <p id="clock_p2">
            <span style={{ fontWeight: "bold" }}>{formattedDate}</span>
            {formattedTime}
          </p>
        </div>

        <div id="statistics">
          <div id="percentage">
            <p>
              입양률 <span style={{ color: "#3E3E3E" }}>22.3%</span>
            </p>
            <p>
              안락사율 <span style={{ color: "#FF0000" }}>14.4%</span>
            </p>
          </div>
          <div id="rescue">
            <p>오늘 구조된 동물</p>
            <p
              style={{ fontWeight: "bold", color: "#00AC78", fontSize: "30px" }}
            >
              8<span style={{ color: "#3E3E3E", fontSize: "18px" }}>마리</span>
            </p>
          </div>
        </div>

        <div id="gotoreview">
          <p id="title_p1">입양하기</p>
          <Link to="/Review" style={{ textDecoration: "none" }}>
            <p id="viewmore1">더보기</p>
          </Link>
        </div>
        <div id="preview">
            <PreviewContainer>
                <HomePreview/>
            </PreviewContainer>
        </div>

        <div id="gotoprotect">
            <p id="title_p1">임시보호 구해요</p>
            <Link to="/Protection" style={{ textDecoration: 'none' }}><p id="viewmore2">더보기</p></Link>
        </div> 
      <style>
        {`

          #preview::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
  
        <div id="preview">
            <PreviewContainer>
                <HomePreview2/>
            </PreviewContainer>
        </div>
      </div>
    </>
  );
}

export default Home;
