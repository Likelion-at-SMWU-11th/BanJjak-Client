import React from 'react';
import '../../css/Activity.css';
import Banner from '../../components/Banner';

function Activity(props) {
    return (
        <div>
            <Banner/>
            
            <div id="ac_title">
                <p>반짝 활동</p>
            </div>
            
            <div style={{overflowX : 'hidden', overflowY: 'auto', height :'665px'}}>

            <img src={process.env.PUBLIC_URL + '/assets/icons/intro.png'} id="ac_intro" alt="ac_intro"/>
            <p id="ac_p1">BANJJAK ACTIVITIES</p>

            <img src={process.env.PUBLIC_URL + '/assets/icons/act1.png'} id="ac_act" alt="ac_act"/>
            <div id="ac_div1">                
                <p id="ac_p2">유기동물 입양자를 위한 '반짝' 굿즈 오픈</p>
                <p id="ac_p3">반짝은 유기동물 입양자들이 필요한 입양용품을 제작해<br/>
                합리적인 가격에 제공하며 입양용품 선택에 도움을 주고 경제적인 부담을 줄입니다.<br/>
                반짝에서 입양할 시 반짝 굿즈 기프트박스를 일부 제공하고<br/>
                판매 수익금 일부를 유기동물을 위해 기부하는 등 입양문화 활성화를 위한 <br/>선순환을 만들고 있습니다.</p>
            </div>

            <img src={process.env.PUBLIC_URL + '/assets/icons/act2.png'} id="ac_act" alt="ac_act"/>
            <div id="ac_div2">                
                <p id="ac_p2">유기동물 입양 홍보 캠페인</p>
                <p id="ac_p3">‘반짝’과 프로그래밍 단체 ‘멋쟁이사자처럼’이 유기동물에 대한 사회적 인식개선과<br/> 
                올바른 입양문화 활성화를 위해 유기동물 입양 홍보 캠페인을 진행했습니다. <br/>
                평생가족을 찾고 있는 유기동물을 소개하는 웹사이트를 제작해홍보하는 <br/>방법으로 진행했으며
                해당 활동을 통해 얻은 수익으로 <br/>서울 멋사 보호소에 약 111kg의 사료를 기부할 수 있었습니다.</p>
            </div>

            <hr id="ac_hr2"/>
            <div id="ac_div3">
                <p>(주) 반짝 | 대표자 숙멋사 | 02-710-1234 |</p>
                <p>서울특별시 용산구 청파로 100 숙명여자대학교 302호 |</p>
                <p>banjjak@naver.com</p>
            </div>

            <div id="ac_div4">
                <p>© 반짝 제공/데이터 출처 농림축산식품부 ㅣ Website made by banjjak.com</p>
                <p>©Banjjakteam all right reserved.</p>
            </div>
        </div></div>
    );
}

export default Activity;