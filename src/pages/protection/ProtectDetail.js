import React from 'react';
import '../../css/Protection.css';
import Banner from '../../components/Banner';

function ProtectDetail(props) {
    return (
        <>
        <Banner/>

        <div id="written">
            <img src={process.env.PUBLIC_URL + '/assets/icons/profile.png'} id="profile" alt="profile"/>
            <div id="information">
                <p id="writer">아이디</p>
                <p id="time">2023-08-10 23:24  조회 104</p>
            </div>
            {/* <LikeBtn id="like"/> */}
        </div>

        <div>
            <img src={process.env.PUBLIC_URL + '/assets/images/protect1.png'} id="protect1" alt="m2"/>
            <img src={process.env.PUBLIC_URL + '/assets/images/protect2.png'} id="protect2" alt="m2"/>
        </div>

        <hr id="hr"/>

        <div id="text">
                <p id="protect_title">해외입양 전 임보처를 구합니다!!</p>
                <p id="content">주인이 처치곤란이라고 말했던 아가입니다..<br/>
                                밥도 제대로 못먹고 털도 다 엉켜서 방치되어있던 아이
                                다행히 좋은 주인분을 만나게 되어 캐나다로 입양 준비중입니다!!<br/>
                                하지만 지금 지내고 있는 곳에서 계속 지내기 힘든 상황이 되어 
                                새로운 임보처를 구하고있습니다ㅜㅜ <br/>
                                출국을 위해 인천공항과 가까운 지역에 계신 분을 우대합니다.
                                이 아이가 캐나다에 있는 가족을 만나기전 가정생활에 잘 적응하고 따뜻한 사랑을 느낄 수 있게 도와주세요🙏
                </p>
        </div>
        <img src={process.env.PUBLIC_URL + '/assets/icons/floatingchat.png'} id="floatingchat" alt="floatingchat"/>

        <div id="property">
            <p id="property_name">동물정보</p>
            <ul>
                <li>이름x, 수컷 ...</li>
            <p id="property_name">특이사항</p>
                <li>장난감과 터그놀이를 좋아해요</li>
                <li>마른거 빼고 매우 건강!!</li>
            <p id="property_name">임보조건</p>
                <li>출국 비행기가 구해질 때까지만 부탁드려요. (1개월 이하)</li>
            </ul>
        </div>
        </>
    );
}

export default ProtectDetail;