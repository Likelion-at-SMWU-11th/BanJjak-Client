import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../css/Writing.css';


function WriteProtection() {

    const navigate = useNavigate();

    const handleExitClick = () => {
        // Protection 페이지로 이동
        navigate("/Protection");
    };

    return (
        <div>
            <div id="TopBar">
            <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
             id="exitBtn"
            class="invisibleContent"
        />
        <span>임보요청 작성</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>

      <div id="wp_div">
        <div id="wp_p1">
            <p>기본 정보</p>
            <form>
                <label id="wp_label">연락처</label><input type="text" id="wp_form_chat" placeholder="카카오톡 오픈채팅 주소"/>
            </form>
        </div>

        <hr/>

        <div id="wp_p1">
            <p>동물 정보</p>
            <form>
                <label id="wp_label">이름</label><input type="text" id="wp_form_name" placeholder=""/><br/>
                <label id="wp_label">동물</label>
                <input type="radio" name="animal" id="wp_form_animal"/>개
                <input type="radio" name="animal" id="wp_form_animal"/>고양이
                <input type="radio" name="animal" id="wp_form_animal"/>기타<br/>
                <label id="wp_label">품종</label><input type="text" id="wp_form_sort"/><br/>
                <label id="wp_label">성별</label>
                <input type="radio" name="sex" id="wp_form_sex"/>수컷
                <input type="radio" name="sex" id="wp_form_sex"/>암컷
                <input type="radio" name="sex" id="wp_form_sex"/>미확인<br/>
                <label id="wp_label">중성화</label>
                <input type="radio" name="neutered" id="wp_form_neutered"/>O
                <input type="radio" name="neutered" id="wp_form_neutered"/>X
                <input type="radio" name="neutered" id="wp_form_neutered"/>미확인<br/>
                <label id="wp_label">나이</label><input type="text" id="wp_form_age"/><br/>
                <label id="wp_label">몸무게</label><input type="text" id="wp_form_weight"/><br/>
                <label id="wp_label">사유</label><input type="text" id="wp_form_reason" placeholder="구조 사유 기입 ex)유기"/><br/>
            </form>
        </div>
        <hr/>

        <div id="wp_p1">
            <p>제목</p>
            <form>
                <input type="text" id="wp_form_title"/><br/>
            </form>
        </div>

        <div id="wp_p1">
            <p>내용</p>
            <form>
                <input type="text" id="wp_form_contents"/><br/>
            </form>
        </div>

        <div id="wp_p1">
            <p>특이사항</p>
            <form>
                <input type="text" id="wp_form_special"/><br/>
            </form>
        </div>

        <div id="wp_p1">
            <p>임보조건</p>
            <form>
                <input type="text" id="wp_form_wish"/><br/>
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