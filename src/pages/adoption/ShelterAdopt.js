import React from 'react';
import { Link } from 'react-router-dom';
import AdoptList from '../../components/AdoptList';

function ShelterAdopt(props) {
    return (
        <div>
            <Link to="/Guidance/Agreement">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingread.png'} id="floatingread" alt="floatingread"/>
            </Link>
            <AdoptList/>
            <AdoptList/>
            <AdoptList/>
            <AdoptList/>
            <AdoptList/>
            
        </div>
    );
}

export default ShelterAdopt;