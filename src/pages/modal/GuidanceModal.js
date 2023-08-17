import React from 'react';
import '../../css/Modal.css';
import { Link } from 'react-router-dom';

function GuidanceModal(props) {
    return (
        <div>
            <div id="gmd_back">
            <div id="gmd_body">
                <p id="gmd_title">입양 안내를 먼저 확인해주세요!</p>
                <Link to="/Adoption/AdoptDetail"><img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="gmd_exit" alt="exit"/></Link><br/>
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="gmd_logo2D" alt="logo2D"/>
                <p id="gmd_contents">입양 안내를 확인하지 않으셨네요.<br/>반짝은 유기동물이 좋은 가족을 만날 수 있도록<br/>관련 동의를 우선적으로 진행하고 있습니다.</p>
                <Link to="/Guidance/Agreement" style={{textDecorationColor : '#00AC78'}}><p id="gmd_goto">입양안내 바로가기</p></Link>
            </div>
        </div>
        </div>
    );
}

export default GuidanceModal;