import React from 'react';
import '../css/Missing.css';

const tagicon = () => {
    return (
        <div id="missingtag">
            <img src={process.env.PUBLIC_URL + '/assets/icons/sort.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname">견종</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/sex.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> 성별 (중성화여부)</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/birth.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> 00년생</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/color.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname">털 색깔</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/when.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname">실종날짜</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/where.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> 실종위치</p>
        </div>
    );
};

export default tagicon;