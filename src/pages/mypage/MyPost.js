import React from 'react';
import '../../css/MyPost.css';
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

function MyPost() {
    return (
        <>
            <Banner/>
            <p id="mp_title">내가 쓴 글</p>
            <div>

            <div id="mp_adoption">
                <p>입양하기</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div>

            <div id="mp_missing">
                <p>실종/목격</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div>

            <div id="mp_protection">
                <p>임보요청</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div>

            <div id="mp_review">
                <p>입양후기</p>
                <PreviewContainer>
                <LikePreview/>
                <LikePreview/>
                </PreviewContainer>
            </div></div>
        </>
    );
}

export default MyPost;