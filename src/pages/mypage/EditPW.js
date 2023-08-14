import React from 'react';
import { Link } from "react-router-dom";
import '../../css/EditInfo.css';

function EditPW() {
    return (
        <>
        <div id="ep_bar">
            <h2>비밀번호 변경</h2>
            <Link to="/MyPage/EditInfo">
            <img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="ep_exit" alt="exit"/>
            </Link>
        </div>

        <div id="ep_div">
        <div id="ep_p1">
            <p>기존 비밀번호</p>
            <form>
                <input type="text" id="ep_form1"/>
            </form>
        </div>

        <div id="ep_p1">
            <p>새로운 비밀번호</p>
            <form>
                <input type="text" id="ep_form2" placeholder="영문/숫자/특수문자 혼합 8~20자"/>
                <input type="text" id="ep_form3" placeholder="비밀번호를 한 번 더 입력해주세요."/>
            </form>
        </div>

        <form>
            <button id="ep_btn">비밀번호 변경</button>
        </form>
        </div>
        </>
    );
}

export default EditPW;