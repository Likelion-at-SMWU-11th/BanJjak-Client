import React from 'react';
import '../../css/Missing.css';
import Banner from '../../components/Banner';
/* import LikeBtn from '../../components/LikeBtn'; */
import MissingTag from '../../components/MissingTag';

function MissingDetail(props) {
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
                <img src={process.env.PUBLIC_URL + '/assets/images/missingdog1.png'} id="m1" alt="m2"/>
                <img src={process.env.PUBLIC_URL + '/assets/images/missing2.png'} id="m2" alt="m2"/>
            </div>

            <hr id="hr"/>

            <div id="text">
                <p id="misstitle">용산경찰서 근처에서 요키를 놓쳤습니다</p>
                <p id="content">동물병원 다녀오는 길에 용산경찰서 근처에서 놓쳤습니다
                나이가 많아 귀도 잘 안 들리고 최근 건강이 안 좋아져서 너무 걱정됩니다 <br/>
                요키 치고는 색이 밝고 꿀벌하네스를 하고 있었어요 <br/>
                인근에서 닮은 강아지 발견하신다면 시간대 상관없이 꼭 연락 부탁드립니다</p>
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingchat.png'} id="floatingchat" alt="floatingchat"/>

        <MissingTag/>
        </>
    );
}

export default MissingDetail;