import React from 'react';
import '../../css/Guidance.css';
import Banner from '../../components/Banner';

function Guidance(props) {
    return (
        <>
        <Banner/>

        <div id="g_selfcheck">
            <p>셀프 체크</p>
        </div>
        <div id="g_agreement">
            <p>입양 절차 동의</p>
        </div><br/>

        <img src={process.env.PUBLIC_URL + '/assets/icons/selfcheck.png'} id="g_banner" alt="g_banner"/>
        
        <form id="g_form1">
            <input type="checkbox" id="g_check"/>동물 털 알레르기가 있진 않으신가요?<br/>
            <input type="checkbox" id="g_check"/>이사, 결혼, 임신, 유학 등 가정환경이 바뀌어도<br/>끝까지 책임질 수 있다는 결심이 섰나요?<br/>
            <input type="checkbox" id="g_check"/>함께 지내는 가족 구성원과 합의가 되었나요?<br/>
            <input type="checkbox" id="g_check"/>산책, 놀이 등 돌볼 시간이 충분하신가요?<br/>
            <input type="checkbox" id="g_check"/>입양 이후 꾸준히 발생할 양육비용을<br/>감당하실 의사와 능력이 있으신가요?<br/>
            <input type="checkbox" id="g_check"/>반려동물이 아플 때 병원에 데려가고<br/>보살필 의사와 능력이 있으신가요?<br/>
            <input type="checkbox" id="g_check"/>현재 키우고 있는 반려동물과 새로 맞이할 동물이<br/>잘 어울릴 수 있을지 생각해 보셨나요?<br/>
        
            <input type="button" id="g_btn" value="완료하기"/>
        </form>

        
        </>
    );
}

export default Guidance;