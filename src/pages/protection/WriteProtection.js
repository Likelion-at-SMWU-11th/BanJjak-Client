import React from 'react';
import { Link } from "react-router-dom";
import '../../css/EditInfo.css';

function WriteProtection() {
    return (
        <div>
            <div id="wp_bar">
            <h2>임보요청 작성</h2>
            <Link to="/Protection">
            <img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="ep_exit" alt="exit"/>
            </Link>
            </div>

        <div id="wp_div">
        <div id="wp_p1">
            <p>기본 정보</p>
            <form>
                <label>연락처</label><input type="text" id="wp_form_chat"/>
            </form>
        </div>

        <div id="wp_p1">
            <p>동물 정보</p>
            <form>
                <label>이름</label><input type="text" id="wp_form_center" placeholder=""/><br/>
                <label>동물</label><input type="text" id="wp_form"/><br/>
                <label>품종</label><input type="text" id="wp_form"/><br/>
                <label>성별</label><input type="text" id="wp_form"/><br/>
                <label>중성화</label><input type="text" id="wp_form"/><br/>
                <label>나이</label><input type="text" id="wp_form"/><br/>
                <label>몸무게</label><input type="text" id="wp_form"/><br/>
                <label>사유</label><input type="text" id="wp_form"/><br/>
            </form>
        </div>

        <div id="wp_p1">
            <p>제목</p>
        </div>

        <div id="wp_p1">
            <p>내용</p>
            <form>
                <input type="text" id="wp_form_center" placeholder=""/><br/>
            </form>
        </div>

        <div id="wp_p1">
            <p>특이사항</p>
            <form>
                <input type="text" id="wp_form_center" placeholder=""/><br/>
            </form>
        </div>

        <div id="wp_p1">
            <p>임보조건</p>
            <form>
                <input type="text" id="wp_form_center" placeholder=""/><br/>
            </form>
        </div>


        <form>
            <button id="wp_btn">등록하기</button>
        </form>
        </div>
        </div>
    );
}

export default WriteProtection;