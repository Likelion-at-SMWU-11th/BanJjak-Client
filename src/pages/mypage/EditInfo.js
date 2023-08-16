import React from 'react';
import { Link } from "react-router-dom";
import '../../css/EditInfo.css';
import Banner from '../../components/Banner';

function EditInfo() {
    return (
        <>
        <Banner/>
        
        <div id="ei_editphoto">
            <img src={process.env.PUBLIC_URL + '/assets/icons/editphoto.png'} id="ei_photo1" alt="editphoto"/>
        </div>

        <div id="ei_div">
        <div id="ei_nickname">
            <p id="ei_p1">닉네임</p>
            <p id="ei_p2">* 닉네임을 설정하면 <span>30일간 변경할 수 없습니다.</span></p>
            <form>
                <input type="text" id="ei_form1"/>
                <button id="ei_btn1">변경하기</button>
            </form>
        </div>

        <div id="ei_email">
            <p id="ei_p1">이메일</p>
            <p id="ei_p2">* 이메일은 변경이 불가능합니다.</p>
            <form>
                <p id="ei_form2"></p>
            </form>
        </div>

        <div id="ei_password">
            <p id="ei_p1">비밀번호</p>
            <form>
                <Link to="/MyPage/EditInfo/EditPW">
                <button id="ei_btn2">변경하러 가기</button>
                </Link>
            </form>
        </div>

        <div id="ei_phonenum">
            <p id="ei_p1">연락처</p>
            <form>
                <input type="tel" id="ei_form4"/>
                <button id="ei_btn3">변경하기</button>
            </form>
        </div>
        </div>
        </>
    );
}

export default EditInfo;