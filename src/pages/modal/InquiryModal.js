import React from 'react';
import '../../css/Modal.css';
import { Link } from 'react-router-dom';

function InquiryModal(props) {
    return (
        <div id="imd_back">
            <div id="imd_body">
                <p id="imd_title">입양 문의하기</p>
                <Link to="/Adoption/AdoptDetail"><img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="imd_exit" alt="exit"/></Link>
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="imd_logo2D" alt="logo2D"/>
                <p id="imd_shelter">아지네보호소</p>
                <p id="imd_number">02-718-2339</p>
            </div>
        </div>
    );
}

export default InquiryModal;