import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Notice.css';
import Banner from '../../components/Banner';
import Notices from './Notices';
import Event from './Event';


function Notice(props) {
    const [isNotices, setIsNotices] = useState(true);

    const NoticesStyle = {
        color: isNotices ? '#00AC78' : '#828282', 
        borderBottom: isNotices ? '1px solid #00AC78' : '1px solid #ECECEC', 
        cursor: isNotices ? 'default' : 'pointer', 
    };

    const EventStyle = {
        color: isNotices ? '#828282' : '#00AC78', 
        borderBottom: isNotices ? '1px solid #ECECEC' : '1px solid #00AC78',
        cursor: isNotices ? 'pointer' : 'default', 
    };

    const handleNoticeTypeChange = () => {
        if (!isNotices) {
            setIsNotices(true);
        }
    };

    return (
        <>
        <Banner/>

        <Link to="/Notice/Notices">
        <div id="n_notice"
            style={NoticesStyle}
            onClick={handleNoticeTypeChange}>
            <p>공지사항</p>
        </div></Link>

        <Link to="/Notice/Event">
        <div id="n_event"
            style={EventStyle}
            onClick={() => setIsNotices(false)}>
            <p>이벤트</p>
        </div></Link><br/>

        <div>
            {isNotices && <Notices/>}
            {!isNotices && <Event/>}
        </div>
        </>
    );
}

export default Notice;