import React from 'react';
import '../../css/Notice.css';
import Banner from '../../components/Banner';


function Notice(props) {
    return (
        <>
        <Banner/>

        <div id="n_notice">
            <p>공지사항</p>
        </div>
        <div id="n_event">
            <p>이벤트</p>
        </div><br/>

        <img src={process.env.PUBLIC_URL + '/assets/icons/ad3.png'} id="n_ad3" alt="n_ad3"/> 
        </>
    );
}

export default Notice;