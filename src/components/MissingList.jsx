import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Missing.css';

const MissingList = () => {
    return (
        <>
        <Link to="/Missing/MissingDetail" style={{ textDecoration: 'none' }}>
        <div id="missinglist">
            <div id="ml_container">
                <img src={process.env.PUBLIC_URL + '/assets/images/missingdog1.png'} id="ml_photo" alt="missingphoto"/>
            </div>
            <div id="listinform">
                <p id="main">[개] 포메라니안 (암)</p>
                <p id="sub">중성화O, 04년생</p>
                <div id="missinform">
                    <p>실종장소</p>
                    <p>실종일시</p>
                </div>
            </div>
        </div>
        </Link>
        </>
    );
};

export default MissingList;