import React, { useState } from 'react';
import '../../css/Review.css';
import Banner from '../../components/Banner';

function ReviewDetail() {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };
    return (
        <>
        <Banner/>

        <div style={{ overflowX: 'hidden', overflowY: 'auto', height: '725px' }}>
        <div id="written">
            <img src={process.env.PUBLIC_URL + '/assets/icons/profile.png'} id="profile" alt="profile"/>
            <div id="information">
                <p id="writer">아이디</p>
                <p id="time">2023-08-10 23:24  조회 104</p>
            </div>
            <button
                    style={{
                        position: 'absolute',
                        marginLeft: '70px',
                        marginTop: '30px',
                        border: 'none',
                        backgroundColor: 'white',
                    }}
                    onClick={handleLikeClick}
                >
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            (liked ? '/assets/icons/like2.png' : '/assets/icons/like3.png')
                        }
                        id="likeButton"
                        alt="likeButton"
                    />
                </button>
        </div>

        <div id="rd_container1">
            <img src={process.env.PUBLIC_URL + '/assets/images/rd_photo1.png'} id="rd_photo1" alt="m2"/>
        </div>
        <div id="rd_container2">
            <img src={process.env.PUBLIC_URL + '/assets/images/rd_photo2.png'} id="rd_photo2" alt="m2"/>
        </div>

        <hr id="hr"/>

        <div id="rd_text">
                <p id="rd_title">우리 개가 달라졌어요~</p>
                <p id="rd_content">반짝을 통해 예삐와 가족이 된지 어느덧 2년입니다!
                처음에는 학대당한 기억 때문에 안기만 하면 고개를 숙이고 얼음이 됐어요. 특히 남자를 정말 무서워했는데요.
                이제는 겁도 사라지고, 사람만 보면 배를 까대네요 😅 <br/><br/>
                학대도 모자라서 밥도 굶겼는지 살이 하나도 없던 예삐 
                산책 나가면 다들 말랐다며 가끔 어른분들은 혼내셨는데...
                이젠 돼지가 되어버렸어요.ㅠㅠ 다이어트 중입니다. 
                굶었던 기억 때문인지 음식에 욕심내는 모습을 볼 때면
                마음이 아프기도 하고 여러 감정이 들어요.<br/><br/>
                예삐를 만나고도 종종 어플 들어와서 구경했는데,
                학대견 입양 고민하시는 분들이 계시길래 적어봅니다!<br/><br/>
                예삐야 우리 더 더 행복하자~~💗💗
                </p>
        </div>
        </div>


        </>
    );
}

export default ReviewDetail;