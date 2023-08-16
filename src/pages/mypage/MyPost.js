import React from 'react';
import '../../css/MyPost.css';
import Banner from '../../components/Banner';

function MyPost() {
    return (
        <>
            <Banner/>
            <p id="mp_title">내가 쓴 글</p>
            <div style={{overflowX : 'hidden', overflowY: 'auto', height :'670px'}}>

            <div id="mp_adoption">
                <p>입양하기</p>
                <hr id="mp_hr"/>
            </div>

            <div id="mp_missing">
                <p>실종/목격</p>
                <hr id="mp_hr"/>
            </div>

            <div id="mp_protection">
                <p>임보요청</p>
                <hr id="mp_hr"/>
            </div>

            <div id="mp_review">
                <p>입양후기</p>
                <hr id="mp_hr"/>
            </div></div>
        </>
    );
}

export default MyPost;