import React from 'react';
import '../../css/Review.css';
import Banner from '../../components/Banner';
import ReviewList from '../../components/ReviewList';


function Review() {
    return (
        <>
        <Banner/>

        <div id="adopt_review">
            <p>입양후기</p>
        </div>
        <div id="reunion_review">
            <p>재회후기</p>
        </div><br/>
        
        <div id="reviewlist">
        <ReviewList/>
        <ReviewList/>
        </div>
        </>
    
    );
}

export default Review;