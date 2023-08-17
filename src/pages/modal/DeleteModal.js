import React from 'react';
import '../../css/Modal.css';
import { Link } from 'react-router-dom';

function DeleteModal(props) {
    return (
        <div>
            <div>
            <div id="dmd_back">
            <div id="dmd_body">
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="dmd_logo2D" alt="logo2D"/>
                <p id="dmd_manage">삭제된 글은 복구할 수 없습니다.<br/>삭제하시겠습니까?</p>
                <div id="dmd_btn">
                    <p id="dmd_no">취소</p>
                    <p id="dmd_yes">확인</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default DeleteModal;