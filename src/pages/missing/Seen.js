import React from 'react';
import { Link } from 'react-router-dom';
import MissingList from '../../components/MissingList';


function Seen(props) {
    return (
        <div>
            <Link to="/Missing/Seen/WriteSeen">
                <img src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} 
                id="floatingwrite" alt="floatingwrite" style={{position : 'fixed', bottom : '15%'}}/>
            </Link>
            <MissingList/>
            <MissingList/>
            <MissingList/>
        </div>
    );
}

export default Seen;