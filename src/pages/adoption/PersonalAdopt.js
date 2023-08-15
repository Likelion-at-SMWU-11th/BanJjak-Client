import React from 'react';
import { Link } from 'react-router-dom';
import AdoptList from '../../components/AdoptList';

function PersonalAdopt(props) {
    return (
        <div>
            <AdoptList/>
            <AdoptList/>
            <Link to="/Adoption/WriteAdoption">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} id="floatingwrite" alt="floatingwrite"/>
            </Link>
        </div>
    );
}

export default PersonalAdopt;