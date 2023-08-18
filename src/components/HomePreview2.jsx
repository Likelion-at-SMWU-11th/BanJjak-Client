import React from 'react';
import styled from 'styled-components';

const HomePreviewContainer = styled.div`
    flex: 0 0 auto;
`;

const HomePreview2 = () => {
    return (
        <HomePreviewContainer>
        <div style={{ width : '150px', height : '100px', border : '1px solid #BCBCBC', margin : '15px 5px', borderRadius : '10px', display : 'inline-block'}}>
            {/* 이미지 가져올때 img 태그 안에 style={{width:'100%', height:'100%', objectFit:'cover', borderRadius : '10px'}} 넣어주기*/}
        </div></HomePreviewContainer>
    );
}; 

export default HomePreview2;