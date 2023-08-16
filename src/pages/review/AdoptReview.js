import React from 'react';
import { Link } from 'react-router-dom';
import ReviewList from '../../components/ReviewList';

function AdoptReview(props) {
    return (
        <div>
            <Link to="/Review/WriteReview">
            <img src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} 
            alt="floatingwrite" style={{position : 'fixed', marginLeft:'310px', marginTop :'470px'}}/>
            </Link>
            <ReviewList/>
            <ReviewList/>
        </div>
    );
}

export default AdoptReview;