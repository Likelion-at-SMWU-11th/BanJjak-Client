import React from 'react';
import '../../css/Notice.css';
import { Link } from 'react-router-dom';

const NoticeList = () => {
    return (
        <div>
            <div>
            <img src={process.env.PUBLIC_URL + '/assets/icons/ad3.png'} id="n_ad3" alt="n_ad3"/>

            <Link to="/Notice/NoticeList/N1" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">[중요]신종펫샵에 주의하세요!</p>
            <p id="nl_date">2023.07.17</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">2023년 하반기, 반짝과 함께 올바른 입양 문화를 만들어갈 팀원을 모집합니다. (~7/28)</p>
            <p id="nl_date">2023.07.01</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">반짝 사이트 점검 완료 안내</p>
            <p id="nl_date">2023.06.22</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">서버 안정화 작업 완료 안내</p>
            <p id="nl_date">2023.06.07</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">보호소 조회 개선 작업 진행 예정 안내</p>
            <p id="nl_date">2023.05.26</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">[중요] 보호소 위치를 배포하지 말아주세요.</p>
            <p id="nl_date">2023.04.25</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">[중요] 불법 영업행위에 주의하세요!</p>
            <p id="nl_date">2023.04.13</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">오늘은 3월 23일, 세계 강아지의 날입니다!</p>
            <p id="nl_date">2023.03.23</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">반짝 홈 화면이 새로워졌어요!</p>
            <p id="nl_date">2023.03.05</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="noticelist">
            <p id="nl_title">반짝과 함께 올바른 입양 문화를 만들어갈 팀원을 모집합니다. (~3/31)</p>
            <p id="nl_date">2023.03.01</p>
            </div></Link>
        </div>
        </div>
    );
};

export default NoticeList;