import React from 'react';
import '../../css/Notice.css';
import { Link } from 'react-router-dom';

function Event(props) {
    return (
        <div>
            <div>
            <img src={process.env.PUBLIC_URL + '/assets/icons/ad3.png'} id="n_ad3" alt="n_ad3"/>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">입양의 행복을 전하는 반짝 유기동물 입양가족 사연을 모집합니다. (~8/31) </p>
            <p id="event_date">2023.08.18</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">[당첨자 발표] 유기동물에게 기프트박스를 선물하세요!</p>            
            <p id="event_date">2023.08.10</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">📢오늘 마감📢 유기동물에게 기프트박스를 선물하세요!</p>            
            <p id="event_date">2023.07.31</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">[당첨자 발표] 기능과 기호, 기여움까지 모두 잡은 반짝 방석 이벤트를 진행합니다!</p>
            <p id="event_date">2023.07.20</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">기능과 기호, 기여움까지 모두 잡은 반짝 방석 이벤트를 진행합니다! (~7/15)</p>
            <p id="event_date">2023.07.01</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">유기동물에게 기프트박스를 선물하세요! (~7/31)</p>
            <p id="event_date">2023.06.31</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">무더운 여름을 대비해요! 반짝 후원 및 봉사 소개</p>
            <p id="event_date">2023.05.20</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">2023 입양 홍보 프로젝트에 참여할 입양 홍보가 필요한 유기견을 모집합니다. (~6/1)</p>
            <p id="event_date">2023.05.10</p>
            </div></Link>

            <Link to="" style={{ textDecoration: 'none' }}>
            <div id="eventlist">
            <p id="event_title">🏃‍♂️ 댕댕런 후원 이벤트를 진행합니다.</p>
            <p id="event_date">2023.04.21</p>
            </div></Link>
        </div>
            
        </div>
    );
}

export default Event;