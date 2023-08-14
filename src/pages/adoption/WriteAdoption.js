import React from 'react';
import { Link } from "react-router-dom";
import '../../css/EditInfo.css';


function WriteAdoption() {
    return (
        <>
        <div>
            <div id="wa_bar">
            <h2>입양 공고글 쓰기</h2>
            <Link to="/Adoption">
            <img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="ep_exit" alt="exit"/>
            </Link>
            </div>

        <div id="wa_div">
        <div id="wa_p1">
            <p>기본 정보</p>
            <form>
                <label>보호센터</label><input type="text" id="wa_form_center" placeholder=""/><br/>
                <label>연락처</label><input type="text" id="wa_form_chat"/>
            </form>
        </div>

        <div id="wa_p1">
            <p>동물 정보</p>
            <form>
                <label>이름</label><input type="text" id="wa_form_center" placeholder=""/><br/>
                <label>동물</label>
                <input type="radio" id="wa_form"/>개
                <input type="radio" id="wa_form"/>고양이
                <input type="radio" id="wa_form"/>기타<br/>
                <label>품종</label><input type="text" id="wa_form"/><br/>
                <label>성별</label>
                <input type="radio" id="wa_form"/>수컷
                <input type="radio" id="wa_form"/>암컷
                <input type="radio" id="wa_form"/>미확인<br/>
                <label>중성화</label>
                <input type="radio" id="wa_form"/>O
                <input type="radio" id="wa_form"/>X
                <input type="radio" id="wa_form"/>미확인<br/>
                <label>나이</label><input type="text" id="wa_form"/><br/>
                <label>몸무게</label><input type="text" id="wa_form"/><br/>
            </form>
        </div>

        <div id="wa_p1">
            <p>태그선택 (최대 5개)</p>
        </div>

        <div id="wa_p1">
            <p>임보자 한마디 (최대 70자)</p>
            <form>
                <input type="text" id="wa_form_center" placeholder=""/><br/>
            </form>
        </div>

        <div id="wa_p1">
            <p>특이사항</p>
            <form>
                <input type="text" id="wa_form_center" placeholder=""/><br/>
            </form>
        </div>


        <form>
            <button id="wa_btn">등록하기</button>
        </form>
        </div>
        </div>
        </>
    );
}

export default WriteAdoption;