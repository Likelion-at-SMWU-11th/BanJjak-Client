import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/Writing.css';

function WriteSeen(props) {
    const navigate = useNavigate();

    const handleExitClick = () => {
        // Missing 페이지로 이동
        navigate("/Missing/Seen");
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
        <span>목격 신고</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>
            
      <div id="ws_div">
        <div id="ws_p1">
            <p>기본 정보</p>
            <form>
                <label id="ws_label">목격날짜</label><input type="text" id="ws_form_date"/><br/>
                <label id="ws_label">목격장소</label><input type="text" id="ws_form_place" placeholder="구체적인 장소를 기입해주세요"/><br/>
                <label id="ws_label">연락처</label><input type="text" id="ws_form_chat" placeholder="카카오톡 오픈채팅 주소"/>
            </form>
        </div><hr/>

        <div id="ws_p1">
            <p>동물 정보</p>
            <form>
                <label id="ws_label">동물</label>
                <input type="radio" name="animal" id="ws_form_animal"/>개
                <input type="radio" name="animal" id="ws_form_animal"/>고양이
                <input type="radio" name="animal" id="ws_form_animal"/>기타<br/>
                <label id="ws_label">품종</label><input type="text" id="ws_form_sort"/><br/>
                <label id="ws_label">성별</label>
                <input type="radio" name="sex" id="ws_form_sex"/>수컷
                <input type="radio" name="sex" id="ws_form_sex"/>암컷
                <input type="radio" name="sex" id="ws_form_sex"/>미확인<br/>
                <label id="ws_label">중성화</label>
                <input type="radio" name="neutered" id="ws_form_neutered"/>O
                <input type="radio" name="neutered" id="ws_form_neutered"/>X
                <input type="radio" name="neutered" id="ws_form_neutered"/>미확인<br/>
                <label id="ws_label">나이</label><input type="text" id="ws_form_age" placeholder="추정 나이를 적어주세요"/><br/>
                <label id="ws_label">털색</label><input type="text" id="ws_form_fur" placeholder="털색을 설명해주세요"/><br/>
            </form>
        </div><hr/>

        <div id="ws_p1">
            <p>제목</p>
            <form>
                <input type="text" id="ws_form_title"/><br/>
            </form>
        </div>

        <div id="ws_p1">
            <p>내용</p>
            <form>
                <input type="text" id="ws_form_contents"/><br/>
            </form>
        </div>

        <form>
            <button id="ws_btn">등록하기</button>
        </form>


      </div> 
      </div>
    );
}

export default WriteSeen;