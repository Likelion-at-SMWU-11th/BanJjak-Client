import React from 'react';
import { Link } from 'react-router-dom';
import MissingList from '../../components/MissingList';

function Missed(props) {
    return (
        <div>
            <Link to="/Missing/Missed/WriteMissing">
                <img src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} 
                id="floatingwrite" alt="floatingwrite" style={{position : 'fixed', bottom : '15%'}}/>
            </Link>
            <MissingList/>
            <MissingList/>
        </div>
    );
}

export default Missed;