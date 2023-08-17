import React from 'react';

const LikeBtn = () => {
    return (
        <div id="liked">
            <button type="button" id="likebtn">
                <img src={process.env.PUBLIC_URL + `/assets/icons/like3.png`} id="likeicon" alt="likeicon"/>
            </button>
            <p id="likednum">num</p>
        </div>
    );
};

export default LikeBtn;