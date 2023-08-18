import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePreviewContainer = styled.div`
    flex: 0 0 auto;
`;

const HomePreview = ({postData}) => {
    return (
        <>
        <HomePreviewContainer>
        <div style={{ width : '150px', height : '100px', border : '1px solid #BCBCBC', margin : '15px 5px', borderRadius : '10px', display : 'inline-block'}}>
            <img src={postData.image1} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius : '10px'}}/>
        </div></HomePreviewContainer>
        </>
    );
}; 

export default HomePreview;