import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Introduction.css';
import Banner from '../../components/Banner';

function Introduction(props) {
    
    return (
        <div>
            <Banner />
             {/* 반짝소개 버튼 */}
        
            <div id="i_title">
                <p>반짝 소개</p>
            </div>

            <div style={{overflowX : 'hidden', overflowY: 'auto', height :'665px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/icons/intro.png'} id="i_intro" alt="i_intro"/>
                <p id="i_p1">ABOUT BANJJAK</p>
            
                <img src={process.env.PUBLIC_URL + '/assets/icons/about1.png'} id="i_about1" alt="i_about"/>
                <div id="i_div1">                
                    <p id="i_p2">'입양할 수 있는 유기동물'의 폭을 넓히다</p>
                    <p id="i_p3">기존 유기동물 입양 서비스는 임시로 공고하는 동물 정보만 제공하고,<br/>
                        보호소에서 지내는 동물은 방문 외에 알 방법이 없었습니다.
                        <br/><br/>
                이는 보호소 관리자가 대부분 디지털 사용이 익숙지 않은 노년층이며<br/>
                입양 홍보 방법을 모르는 경우가 많은, 즉 디지털 격차에서 출발한 문제이기도 합니다.
                <br/><br/>
                반짝은 해당 문제점을 해결하기 위해 전국 보호소와의 연결다리가 되었고<br/>
                더 많은 유기동물이 가족을 찾을 수 있도록 힘쓰고 있습니다.</p>
                </div>

                <img src={process.env.PUBLIC_URL + '/assets/icons/about2.png'} id="i_about2" alt="i_about"/>
                <div id="i_div2">                
                <p id="i_p2">길 잃은 동물의 안전한 귀가를 위해</p>
                <p id="i_p3">반려동물 실종 시 공고 및 목격 서비스를 통해<br/>
                모든 동물이 안전하게 귀가할 수 있도록 지원합니다.</p>
                </div>

                <img src={process.env.PUBLIC_URL + '/assets/icons/about3.png'} id="i_about3" alt="i_about"/>
                <div id="i_div3">                
                <p id="i_p2">사지 않고 입양하는 문화</p>
                <p id="i_p3">반짝은 유기동물 입양 서비스 지원뿐만 아니라<br/>
                입양가족의 행복한 모습을 널리 알리는 이벤트를 진행하여<br/>
                유기동물 입양문화를 활성화하는 데에 기여하고 있습니다.</p>
                </div>

            <hr id="i_hr2"/>
                <div id="i_div4">
                    <p>(주) 반짝 | 대표자 숙멋사 | 02-710-1234 |</p>
                    <p>서울특별시 용산구 청파로 100 숙명여자대학교 302호 |</p>
                    <p>banjjak@naver.com</p>
                 </div>

                <div id="i_div5">
                    <p>© 반짝 제공/데이터 출처 농림축산식품부 ㅣ Website made by banjjak.com</p>
                    <p>©Banjjakteam all right reserved.</p>
                </div>
                </div>
            
            


            
        </div>
    );
}

export default Introduction;