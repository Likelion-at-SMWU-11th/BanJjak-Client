import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../css/Writing.css';


function WriteAdoption() {

    const navigate = useNavigate();

    const handleExitClick = () => {
        // Adoption 페이지로 이동
        navigate("/Adoption");
    };

    return (
        <>
            <div id="TopBar">
            <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
             id="exitBtn"
            class="invisibleContent"
        />
        <span>입양 공고글 쓰기</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>
      
        <div>
            

        <div id="wa_div">
        <div id="wa_p1">
            <p>기본 정보</p>
            <form>
                <label id="wa_label">보호센터</label><input type="text" id="wa_form_center" placeholder="구군까지 기입 ex) 서울시 용산구"/><br/>
                <label id="wa_label">연락처</label><input type="text" id="wa_form_chat" placeholder="카카오톡 오픈채팅 주소"/>
            </form>
        </div>

        <hr/>

        <div id="wa_p1">
            <p>동물 정보</p>
            <form>
                <label id="wa_label">이름</label><input type="text" id="wa_form_name" placeholder=""/><br/>
                <label id="wa_label">동물</label>
                <input type="radio" name="animal" id="wa_form_animal"/>개
                <input type="radio" name="animal" id="wa_form_animal"/>고양이
                <input type="radio" name="animal" id="wa_form_animal"/>기타<br/>
                <label id="wa_label">품종</label><input type="text" id="wa_form_sort"/><br/>
                <label id="wa_label">성별</label>
                <input type="radio" name="sex" id="wa_form_sex"/>수컷
                <input type="radio" name="sex" id="wa_form_sex"/>암컷
                <input type="radio" name="sex" id="wa_form_sex"/>미확인<br/>
                <label id="wa_label">중성화</label>
                <input type="radio" name="neutered" id="wa_form_neutered"/>O
                <input type="radio" name="neutered" id="wa_form_neutered"/>X
                <input type="radio" name="neutered" id="wa_form_neutered"/>미확인<br/>
                <label id="wa_label">나이</label><input type="text" id="wa_form_age"/><br/>
                <label id="wa_label">몸무게</label><input type="text" id="wa_form_weight"/><br/>
            </form>
        </div>

        <hr/>

        <div id="wa_p1">
            <p>태그선택 (최대 5개)</p>
        </div>

        <div id="wa_p1">
            <p>임보자 한마디 (최대 70자)</p>
            <form>
                <input type="text" id="wa_form_message" placeholder="동물에 관한 한마디를 적어주세요."/><br/>
            </form>
        </div>

        <div id="wa_p1">
            <p>특이사항</p>
            <form>
                <input type="text" id="wa_form_special" placeholder="입양자가 알아야 할 특이사항을 알려주세요."/><br/>
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