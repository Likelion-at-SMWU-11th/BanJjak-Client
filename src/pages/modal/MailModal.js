import React from 'react';
import '../../css/Modal.css';
import { Link } from 'react-router-dom';

function MailModal(props) {
    return (
        <div>
            <div id="mmd_back">
            <div id="mmd_body">
                <p id="mmd_title">간편메일</p>
                <Link to="/MyPage/FAQ"><img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="mmd_exit" alt="exit"/></Link><br/>
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="mmd_logo2D" alt="logo2D"/>
                <p id="mmd_mail">banjjak@naver.com</p>
                <p id="mmd_manage">[고객센터 업무 시간]<br/>평일 9:00~17:00<br/>주말과 공휴일에는 운영하지 않습니다.</p>
            </div>
        </div>
        </div>
    );
}

export default MailModal;