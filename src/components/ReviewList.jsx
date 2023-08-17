import React from 'react';
import '../css/Review.css';
import { Link } from "react-router-dom";

const ReviewList = () => {
    return (
        <div id="r_list">
        <Link to="/Review/ReviewDetail" style={{ textDecoration: 'none' }}>
            <img src={process.env.PUBLIC_URL + '/assets/icons/profile.png'} id="r_profile" alt="profile"/>
            
            <div id="r_information">
                <p id="r_writer">아이디</p>
                <p id="r_time">2023-08-10 23:24  조회 100</p>
            </div>

            <div id="rl_container1">
            <img src={process.env.PUBLIC_URL + '/assets/images/r_photo1.png'} id="rl_photo1" alt="m2"/>
            </div>
            <div id="rl_container2">
            <img src={process.env.PUBLIC_URL + '/assets/images/r_photo2.png'} id="rl_photo2" alt="m2"/>
            </div>

            <div>
                <p id="r_main">우리 개가 달라졌어요~</p>
                <p id="r_sub">반짝을 통해 예삐와 가족이 된지는 어느덧 2년입니다!<br/>
                        처음에는 학대당한 기억 때문에 안기만 하면 고개를 숙이고 얼..
                </p>
            </div>
        </Link>
        </div>
    );
};

export default ReviewList;