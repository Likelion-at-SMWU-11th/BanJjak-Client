import React from 'react';
import styled from 'styled-components';

const HomePreviewContainer = styled.div`
    flex: 0 0 auto;
`;

const HomePreview = () => {
    return (
        <HomePreviewContainer>
        <div style={{ width : '150px', height : '100px', border : '1px solid #BCBCBC', margin : '15px 5px', borderRadius : '10px', display : 'inline-block'}}>

        </div></HomePreviewContainer>
    );
}; 

export default HomePreview;