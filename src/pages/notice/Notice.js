import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Notice.css';
import Banner from '../../components/Banner';
import NoticeList from './NoticeList';
import Event from './Event';
import N1 from './noticepage/N1';


function Notice(props) {
    const [isNoticeList, setIsNoticeList] = useState(true);

    const NoticeListStyle = {
        color: isNoticeList ? '#00AC78' : '#828282', 
        borderBottom: isNoticeList ? '1px solid #00AC78' : '1px solid #ECECEC', 
        cursor: isNoticeList ? 'default' : 'pointer', 
    };

    const EventStyle = {
        color: isNoticeList ? '#828282' : '#00AC78', 
        borderBottom: isNoticeList ? '1px solid #ECECEC' : '1px solid #00AC78',
        cursor: isNoticeList ? 'pointer' : 'default', 
    };

    const handleNoticeTypeChange = () => {
        if (!isNoticeList) {
            setIsNoticeList(true);
        }
    };

    return (
        <>
        <Banner/>
        
        <Link to="/Notice/NoticeList">
        <div id="n_notice"
            style={NoticeListStyle}
            onClick={handleNoticeTypeChange}>
            <p>공지사항</p>
        </div></Link>

        <Link to="/Notice/Event">
        <div id="n_event"
            style={EventStyle}
            onClick={() => setIsNoticeList(false)}>
            <p>이벤트</p>
        </div></Link><br/>
        
        <div style={{overflowX : 'hidden', overflowY: 'auto', height :'665px'}}>

        <div>
            {isNoticeList && <NoticeList/>}
            {!isNoticeList && <Event/>}
        </div></div>
        </>
    );
}

export default Notice;