import React from 'react';
import '../../css/Adoption.css';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import AdoptList from '../../components/AdoptList';

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

function Adoption(props) {
    return (
        <>
        <Banner/>

        <div id="center">
            <p>보호소</p>
        </div>
        <div id="temporary">
            <p>임시보호</p>
        </div><br/>

        <GreenBtn>동물</GreenBtn>
        <SpeciesBtn>강아지</SpeciesBtn><br/>

        <p id="count">n마리</p><br/>

        <div id="adoptlist">
        <AdoptList/>
        <AdoptList/>
        </div>
        </>
    );
}

export default Adoption;