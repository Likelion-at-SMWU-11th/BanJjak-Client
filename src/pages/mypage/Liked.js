import React from 'react';
import '../../css/Liked.css';
import Banner from '../../components/Banner';
import styled from 'styled-components';
import LikePreview from '../../components/LikePreview';

const PreviewContainer = styled.div`
    display: flex;
    overflow-x: auto;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

function Liked() {
    return (
        <>
        <Banner/>

        <p id="l_title">나의 관심동물</p>

        <div>
        <div id="l_adoption">
                <p>입양하기</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div>

            <div id="l_missing">
                <p>실종/목격</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div>

            <div id="l_protection">
                <p>임보요청</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div>

            <div id="l_review">
                <p>입양후기</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div>
        </div>
        </>
    );
}

export default Liked;