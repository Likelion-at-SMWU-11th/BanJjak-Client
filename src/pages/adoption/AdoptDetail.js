import React from 'react';
import Banner from '../../components/Banner';
import LikeBtn from '../../components/LikeBtn';

function AdoptDetail(props) {
    return (
        <>
        <Banner/>
        <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/ddol2.png'} id="detail_photo" alt="detail_photo"/>
        <LikeBtn/>
        </div>

        <div id="detail_main">
        <p id="detail_name">이름</p>
        <p id="detail_info">견종 | 성별(중성화여부) | n년생 | 몸무게 </p>
        </div>

        <div id="hashtag">해시태그 들어갈곳</div>

        <div id="summary">
        <img src={process.env.PUBLIC_URL + '/assets/icons/balloon.png'} id="balloon" alt="balloon"/>
            
        </div>
        </>
    );
}

export default AdoptDetail;