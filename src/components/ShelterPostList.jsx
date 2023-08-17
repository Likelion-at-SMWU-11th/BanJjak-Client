import React from 'react';
import axios from "axios";

const ShelterPostList = () => {
    return (
        <div style={{width : '100%', height :'100px' ,borderBottom : '1px solid #ECECEC'}}>
        <div style={{width :'85%', height : '75%', borderRadius:'20px', marginLeft : '8%', marginTop : '7%', boxShadow : '2px 2px 2px 2px #BCBCBC', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            
            <div style={{width : '35%', height : '100%', borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/images/dog1.png'} alt="animalphoto"style={{width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}/>
            </div>

            <p style={{display : 'inline-block', fontSize:'30px', fontWeight:'bolder', marginLeft :'17%'}}>똘똘이</p>

        </div>
        </div>
    );
};

export default ShelterPostList;