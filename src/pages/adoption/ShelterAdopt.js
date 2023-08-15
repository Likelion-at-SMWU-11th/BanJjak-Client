import React from 'react';
import { Link } from 'react-router-dom';
import AdoptList from '../../components/AdoptList';

function ShelterAdopt(props) {
    return (
        <div>
            <AdoptList/>
            <Link to="/Guidance/Agreement">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingread.png'} id="floatingread" alt="floatingread"/>
            </Link>
        </div>
    );
}

export default ShelterAdopt;