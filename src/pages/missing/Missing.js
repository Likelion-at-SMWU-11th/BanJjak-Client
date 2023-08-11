import React from 'react';
import '../../css/Missing.css';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import MissingList from '../../components/MissingList';

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

function Missing(props) {
    return (
        <>
        <Banner/>

        <div id="miss">
            <p>실종</p>
        </div>
        <div id="seen">
            <p>목격</p>
        </div><br/>

        <GreenBtn>동물</GreenBtn>
        <SpeciesBtn>모든 동물</SpeciesBtn><br/>
        <MissingList/>
        <MissingList/>
        <MissingList/>
        <MissingList/>

        </>
    );
}

export default Missing;