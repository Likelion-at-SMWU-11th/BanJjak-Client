import React from 'react';
import { Link } from 'react-router-dom';
import MissingList from '../../components/MissingList';

function Missed(props) {
    return (
        <div>
            <Link to="/Missing/Missed/WriteMissing">
                <img src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} 
                alt="floatingwrite" style={{position : 'fixed', marginLeft:'310px', marginTop :'400px'}}/>
            </Link>
            <MissingList/>
            <MissingList/>
        </div>
    );
}

export default Missed;