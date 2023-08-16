import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Guidance.css';
import Banner from '../../components/Banner';
import SelfCheck from './SelfCheck';
import Agreement from './Agreement';

function Guidance() {
    const [isSelfCheck, setIsSelfCheck] = useState(true);

    const SelfCheckStyle = {
        color: isSelfCheck ? '#00AC78' : '#828282', 
        borderBottom: isSelfCheck ? '1px solid #00AC78' : '1px solid #ECECEC', 
        cursor: isSelfCheck ? 'default' : 'pointer', 
    };

    const AgreementStyle = {
        color: isSelfCheck ? '#828282' : '#00AC78', 
        borderBottom: isSelfCheck ? '1px solid #ECECEC' : '1px solid #00AC78',
        cursor: isSelfCheck ? 'pointer' : 'default', 
    };

    const handleGuidanceTypeChange = () => {
        if (!isSelfCheck) {
            setIsSelfCheck(true);
        }
    };

    return (
        <>
        <Banner/>
        
        <Link to="/Guidance/SelfCheck">
        <div id="g_selfcheck"
            style={SelfCheckStyle}
            onClick={handleGuidanceTypeChange}>
            <p>셀프 체크</p>
        </div></Link>

        <Link to="/Guidance/Agreement">
        <div id="g_agreement"
            style={AgreementStyle}
            onClick={() => setIsSelfCheck(false)}>
            <p>입양 절차 동의</p>
        </div></Link><br/>
        <div style={{overflowX : 'hidden', overflowY: 'auto', height :'665px'}}>
        <div>
        {isSelfCheck && <SelfCheck />}
        {!isSelfCheck && <Agreement />}
        </div></div>
        </>
    );
}

export default Guidance;