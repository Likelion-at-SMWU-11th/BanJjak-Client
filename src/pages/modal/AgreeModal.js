import React from 'react';
import '../../css/Modal.css';
import { Link } from 'react-router-dom';

function AgreeModal(props) {
    return (
        <div>
            <div id="amd_back">
            <div id="amd_body">
                <p id="amd_title">동의 완료!</p>
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="amd_logo2D" alt="logo2D"/>
                <p id="amd_manage1">반짝은 유기동물이 좋은 가족을 만날 수 있도록<br/>미리 입양 절차 동의를 안내하고 있습니다.
                                    <br/>동의를 완료하셨으므로 입양 문의가 가능합니다.<br/>좋은 마음으로 반짝을 찾아와주셔서 감사합니다.</p>
                <p id="amd_manage2">입양/임보 문의 시 관리자 측에서 요구하는<br/>추가적인 조건이 있을 수 있습니다.</p>
                <div id="amd_btn">
                    <Link to="/Home"><p id="amd_more">더 둘러보기</p></Link>
                    <Link to="/Adoption"><p id="amd_goadopt">입양하러 가기</p></Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AgreeModal;