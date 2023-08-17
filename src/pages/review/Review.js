import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Review.css';
import Banner from '../../components/Banner';
import AdoptReview from './AdoptReview';
import ReunionReview from './ReunionReview';

function Review() {
    const [isAdoptReview, setIsAdoptReview] = useState(true);

    const adoptReviewStyle = {
        color: isAdoptReview ? '#00AC78' : '#828282', 
        borderBottom: isAdoptReview ? '1px solid #00AC78' : '1px solid #ECECEC', 
        cursor: isAdoptReview ? 'default' : 'pointer', 
    };

    const reunionReviewStyle = {
        color: isAdoptReview ? '#828282' : '#00AC78', 
        borderBottom: isAdoptReview ? '1px solid #ECECEC' : '1px solid #00AC78',
        cursor: isAdoptReview ? 'pointer' : 'default', 
    };

    const handleReviewTypeChange = () => {
        if (!isAdoptReview) {
            setIsAdoptReview(true);
        }
    };

    return (
        <>
            <Banner />

            <Link to="/Review/AdoptReview">
                <div
                    id="adopt_review"
                    style={adoptReviewStyle}
                    onClick={handleReviewTypeChange}
                >
                    <p>입양후기</p>
                </div>
            </Link>

            <Link to="/Review/ReunionReview">
                <div
                    id="reunion_review"
                    style={reunionReviewStyle}
                    onClick={() => setIsAdoptReview(false)}>
                    <p>재회후기</p>
                </div>
            </Link><br />

            <div style={{overflowX : 'hidden', overflowY: 'auto', height :'665px'}}>
            <div id="reviewlist">
            {isAdoptReview && <AdoptReview />}
            {!isAdoptReview && <ReunionReview />}
            </div></div>
        </>
    );
}

export default Review;
