import React from "react";
import { Link } from "react-router-dom";
import "../../css/MyPage.css";
import Banner from "../../components/Banner";

function MyPage() {
  return (
    <>
      <Banner />
      <div style={{overflowX : 'hidden', overflowY: 'auto', height :'690px'}}>
      {/*프로필 정보 및 수정 */}
      <Link to="/MyPage/EditInfo">
        <div id="editprofile">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/editphoto.png"}
            id="editphoto"
            alt="editphoto"
          />
          <div id="information">
            <p id="name">name</p>
            <p id="num">+82 010-0000-0000</p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more1"
            alt="more"
          />
          <br />
        </div>
      </Link>

      {/* 광고 배너2*/}
      <img
        src={process.env.PUBLIC_URL + "/assets/icons/ad2.png"}
        id="ad2"
        alt="ad2"
      />

      {/* 마이페이지 리스트*/}
      <Link to="/MyPage/MyPost">
        <div id="mypagelist">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/mypost.png"}
            id="mypageicons"
            alt="like1"
          />
          <h4 id="mypagename">내가 쓴 글</h4>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more2"
            alt="more"
          />
          <br />
        </div>
      </Link>

      <Link to="/MyPage/Liked">
        <div id="mypagelist">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/like1.png"}
            id="mypageicons"
            alt="like1"
          />
          <h4 id="mypagename">나의 관심 동물</h4>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more2"
            alt="more"
          />
          <br />
        </div>
      </Link>

      <Link to="https://www.instagram.com/banjjak.official/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
        <div id="mypagelist">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/insta.png"}
            id="mypageicons"
            alt="insta"
          />
          <h4 id="mypagename">반짝 인스타그램</h4>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more2"
            alt="more"
          />
          <br />
        </div>

      </Link>

      <Link to="https://www.animal.go.kr/front/index.do">
        <div id="mypagelist">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/national.png"}
            id="mypageicons"
            alt="national"
          />
          <h4 id="mypagename">국가동물등록</h4>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more2"
            alt="more"
          />
          <br />
        </div>
      </Link>
      <br />
      <br />

      <Link to="/Notice">
        <div id="mypagelist">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/notice.png"}
            id="mypageicons"
            alt="notice"
          />
          <h4 id="mypagename">공지사항</h4>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more2"
            alt="more"
          />
          <br />
        </div>
      </Link>

      <Link to="/MyPage/FAQ">
        <div id="mypagelist">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/faq.png"}
            id="mypageicons"
            alt="faq"
          />
          <h4 id="mypagename">자주 묻는 질문</h4>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more2"
            alt="more"
          />
          <br />
        </div>
      </Link>

      <Link to="https://open.kakao.com/o/gdi0MYyf">
        <div id="mypagelist">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/inquiry.png"}
            id="mypageicons"
            alt="inquiry"
          />
          <h4 id="mypagename">문의하기</h4>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
            id="mypage_more2"
            alt="more"
          />
          <br />
        </div>
      </Link>
      <br />
      <br />

      <div id="mypagelist">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/logout.png"}
          id="mypageicons"
          alt="logout"
        />
        <h4 id="mypagename">로그아웃</h4>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/more.png"}
          id="mypage_more2"
          alt="more"
        />
        <br />
      </div></div>
    </>
  );
}

export default MyPage;
