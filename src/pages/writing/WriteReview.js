import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/Writing.css';

function WriteReview() {

    const navigate = useNavigate();

    const handleExitClick = () => {
        // Review 페이지로 이동
        navigate("/Review");
    };
    return (
        <div style={{overflowX : 'hidden', overflowY: 'auto', height :'840px'}}>
            <div id="TopBar">
            <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
             id="exitBtn"
            class="invisibleContent"
            />
            <span>입양후기 작성</span>
            <img
            src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
            alt="exit"
            id="exitBtn"
            onClick={handleExitClick}
            />
            </div>

      <div id="wr_div">
        <div id="wr_p1">
            <p>카테고리 구분</p>
            <form>
                <input type="radio" name="sex" id="wr_form_category"/>입양후기
                <input type="radio" name="sex" id="wr_form_category"/>재회후기
            </form>
        </div><hr/>

        <div id="wr_p1">
            <p>제목</p>
            <form>
                <input type="text" id="wr_form_title"/><br/>
            </form>
        </div>

        <div id="wr_p1">
            <p>내용</p>
            <form>
                <input type="text" id="wr_form_contents"/><br/>
            </form>
        </div>

        <form>
            <button id="wr_btn">등록하기</button>
        </form>
    </div>
    </div>
    );
}

export default WriteReview;