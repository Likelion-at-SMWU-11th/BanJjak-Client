import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Adoption.css';

const AdoptList = () => {
    return (
        <>
        <Link to="/Adoption/AdoptDetail" style={{ textDecoration: 'none' }}>
        <div id="list">
            <img src={process.env.PUBLIC_URL + '/assets/images/dog1.png'} id="animalphoto" alt="animalphoto"/>
            <p id="main">[개] 포메라니안 (암)</p>
            <p id="sub">중성화O, 16년생 추정, 5kg, 인천 멋사보호소</p>
        </div>
        </Link>
        </>
    );
};

export default AdoptList;