import React from 'react';
import Banner from '../../components/Banner';
import '../../css/MyPage.css';

function MyPage() {
    return (
        <>
        <Banner/>

        {/*프로필 정보 및 수정 */}
        <div id="editprofile">
            <img src={process.env.PUBLIC_URL + '/assets/icons/editphoto.png'} id="editphoto" alt="editphoto"/>
            <div id="information">
                <p id="name">name</p>
                <p id="num">+82 010-0000-0000</p>
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more1" alt="more"/><br/>
        </div>
        
        {/* 광고 배너2*/}
        <img src={process.env.PUBLIC_URL + '/assets/icons/ad2.png'} id="ad2" alt="ad2"/>
        
        {/* 마이페이지 리스트*/}
        <div id="mypagelist">
            <img src={process.env.PUBLIC_URL + '/assets/icons/like1.png'} id="mypageicons" alt="like1"/>
            <h4 id="mypagename">나의 관심 동물</h4>
        <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more2" alt="more"/><br/>
        </div>

        <div id="mypagelist">
            <img src={process.env.PUBLIC_URL + '/assets/icons/insta.png'} id="mypageicons" alt="insta"/>
            <h4 id="mypagename">반짝 인스타그램</h4>
            <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more2" alt="more"/><br/>
        </div>

        <div id="mypagelist">
            <img src={process.env.PUBLIC_URL + '/assets/icons/national.png'} id="mypageicons" alt="national"/>
            <h4 id="mypagename">국가동물등록</h4>
            <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more2" alt="more"/><br/>
        </div><br/><br/>

        <div id="mypagelist">
            <img src={process.env.PUBLIC_URL + '/assets/icons/notice.png'} id="mypageicons" alt="notice"/>
            <h4 id="mypagename">공지사항</h4>
            <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more2" alt="more"/><br/>
        </div>

        <div id="mypagelist">
            <img src={process.env.PUBLIC_URL + '/assets/icons/faq.png'} id="mypageicons" alt="faq"/>
            <h4 id="mypagename">자주 묻는 질문</h4>
            <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more2" alt="more"/><br/>
        </div>

        <div id="mypagelist">
            <img src={process.env.PUBLIC_URL + '/assets/icons/inquiry.png'} id="mypageicons" alt="inquiry"/>
            <h4 id="mypagename">문의하기</h4>
            <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more2" alt="more"/><br/>
        </div><br/><br/>

        <div id="mypagelist">
            <img src={process.env.PUBLIC_URL + '/assets/icons/logout.png'} id="mypageicons" alt="logout"/>
            <h4 id="mypagename">로그아웃</h4>
            <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="mypage_more2" alt="more"/><br/>
        </div>
        </>
    );
}

export default MyPage;