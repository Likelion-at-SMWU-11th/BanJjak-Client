import React from 'react';
import '../css/Missing.css';

const MissingTag2 = ({ postData }) => {
    return (
        <div id="missingtag">
            <img src={process.env.PUBLIC_URL + '/assets/icons/sort.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> {postData.animal_type}</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/sex.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> {postData.gender} ({postData.is_nuetered}) </p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/birth.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> {postData.age} </p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/color.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname">{postData.color}</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/when.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> 목격일자 {postData.found_date}</p><br/>
            <img src={process.env.PUBLIC_URL + '/assets/icons/where.png'} id="tagicon" alt="tagicon"/>
            <p id="tagname"> 목격장소 {postData.found_place}</p>
        </div>
    );
};

export default MissingTag2;

