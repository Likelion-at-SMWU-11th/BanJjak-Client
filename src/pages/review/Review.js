import React from 'react';
import '../../css/Review.css';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import ReviewList from '../../components/ReviewList';

const GreenBtn = styled.button`
    color: white;
    background : #00AC78;
    border: 0.5px solid #00AC78;
    border-radius : 20px;
    display : inline-block;
    width : 190px;
    height : 35px;
    margin : 20px 0px 0px 20px;
    text-align : center;
    font-size : 15px;
    font-weight : bold;
`;

const SpeciesBtn = styled.button`
    color: #00AC78;
    background : white;
    border: 0.5px solid #00AC78;
    border-radius : 20px;
    display : inline;
    width : 190px;
    height : 35px;
    margin-left : -30px;
    text-align : center;
    font-size : 15px;
    font-weight : bold;
`;

function Review() {
    return (
        <>
        <Banner/>

        <div id="adopt_review">
            <p>입양후기</p>
        </div>
        <div id="reunion_review">
            <p>재회후기</p>
        </div><br/>

        <GreenBtn>동물</GreenBtn>
        <SpeciesBtn>모든 동물</SpeciesBtn><br/>
        <p id="count">n마리</p>

        <br/>
        <div id="reviewlist">
        <ReviewList/>
        <ReviewList/>
        </div>
        </>
    
    );
}

export default Review;