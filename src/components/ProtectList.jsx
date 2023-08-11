import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Protection.css';

const ProtectList = () => {
    return (
        <>
            <Link to="/Protection/ProtectDetail" style={{ textDecoration: 'none' }}>
            <div id="list">
                <img src={process.env.PUBLIC_URL + '/assets/images/protect_dog1.png'} id="animalphoto" alt="animalphoto"/>
                <p id="main">[개] 포메라니안 (수)</p>
                <p id="sub">중성화X, 22년생 추정, 3kg, 방치견 구조</p>
            </div>
            </Link>
        </>
    );
};

export default ProtectList;