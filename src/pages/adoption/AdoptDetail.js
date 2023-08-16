import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../css/Adoption.css';
import Banner from '../../components/Banner';
//import LikeBtn from '../../components/LikeBtn';


const GreenBtn = styled.button`
    color: white;
    background : #00AC78;
    border: 0.5px solid #00AC78;
    border-radius : 10px;
    display : inline-block;
    position : absolute;
    width : 237px;
    height : 45px;
    margin : 100px -10px;
    text-align : center;
    font-size : 15px;
    font-weight : bold;
`;

const WhiteBtn = styled.button`
    color: #00AC78;
    background : white;
    border: 0.5px solid #00AC78;
    border-radius : 10px;
    display : inline-block;
    width : 115px;
    height : 45px;
    margin : 100px 20px 0px 15px;
    text-align : center;
    font-size : 15px;
    font-weight : bold;
`;

function AdoptDetail(props) {
    return (
        <>
        <Banner/>
        <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/ddol2.png'} id="detail_photo" alt="detail_photo"/>
        <img src={process.env.PUBLIC_URL + '/assets/icons/like3.png'} id="nonlike" alt="nonlike"
        style={{position:'absolute', marginLeft:'320px', marginTop : '-200px' }}/>
        </div>

        <div id="detail_main">
        <p id="detail_name">이름</p>
        <p id="detail_info">견종 | 성별(중성화여부) | n년생 | 몸무게 </p>
        </div>

        <div id="summary">
        <img src={process.env.PUBLIC_URL + '/assets/icons/balloon.png'} id="balloon" alt="balloon"/>
        <p id="ballooncontents">사람을 너무 좋아하는 똘똘한 똘똘이<br/>처음 보는 봉사자에게도 늘 두 손 들고 반겨줍니다.</p>
        <p id="from">OOO 한마디</p>
        </div>

        <div id="progress">
            <p>공고기간</p>
            <p>보호센터</p>
            <p id="place"> * 정확한 위치는 입양 확정 후 안내됩니다.</p>
            <p>특이사항</p>
        </div>
        
        
        <img src={process.env.PUBLIC_URL + '/assets/icons/floatingchat.png'} alt="floatingchat" 
        style={{marginLeft : '310px', marginTop:'-20px',float: 'right', position:'fixed'}}/>
        
        <div id="gotoread">
            <Link to="/Guidance/Agreement">
            <p id="mark_p">입양 전 필독사항 바로가기</p>
            </Link>
        </div>

        <div>
        <WhiteBtn>공유하기</WhiteBtn>
        <Link to="/"><GreenBtn>입양 문의하기</GreenBtn></Link>
        </div>
        </>
    );
}

export default AdoptDetail;