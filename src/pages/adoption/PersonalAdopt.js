import React from 'react';
import { Link } from 'react-router-dom';
import AdoptList from '../../components/AdoptList';

function PersonalAdopt(props) {
    return (
        <div>
            <Link to="/Guidance/Agreement">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingread.png'} id="floatingread" alt="floatingread"/>
            </Link>
            <Link to="/Adoption/WriteAdoption">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} id="floatingwrite" alt="floatingwrite"/>
            </Link>
            <AdoptList/>
            <AdoptList/>
            
        </div>
    );
}

export default PersonalAdopt;