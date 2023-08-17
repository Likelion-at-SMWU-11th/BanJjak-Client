import React from 'react';
import { Link } from 'react-router-dom';
import AdoptList from '../../components/AdoptList';

function PersonalAdopt(props) {
    return (
        <div>
            <Link to="/Guidance/Agreement">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingread.png'} alt="floatingread"
            style={{position : 'fixed', marginLeft:'310px', marginTop :'400px'}}/>
            </Link>
            <Link to="/Adoption/WriteAdoption">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} alt="floatingwrite"
            style={{position : 'fixed', marginLeft:'240px', marginTop :'400px'}}/>
            </Link>
            <AdoptList/>
            <AdoptList/>
            
        </div>
    );
}

export default PersonalAdopt;