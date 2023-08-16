import React from 'react';
import '../../css/Liked.css';
import Banner from '../../components/Banner';

function Liked() {
    return (
        <>
        <Banner/>

        <p id="l_title">나의 관심동물</p>

        <div style={{overflowX : 'hidden', overflowY: 'auto', height :'670px'}}>
        <div id="l_adoption">
                <p>입양하기</p>
                <hr id="l_hr"/>
            </div>

            <div id="l_missing">
                <p>실종/목격</p>
                <hr id="l_hr"/>
            </div>

            <div id="l_protection">
                <p>임보요청</p>
                <hr id="l_hr"/>
            </div>

            <div id="l_review">
                <p>입양후기</p>
                <hr id="l_hr"/>
            </div>
        </div>
        </>
    );
}

export default Liked;