import React from "react";
import styled from "styled-components";

const LikePreviewContainer = styled.div`
  flex: 0 0 auto;
`;

const LikePreview = ({ post }) => {
  return (
    <LikePreviewContainer>
      <div
        style={{
          width: "150px",
          height: "100px",
          border: "1px solid #BCBCBC",
          margin: "20px 5px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        <img
          src={`http://52.78.109.86:8080/${post.image1}`}
          id="al_photo"
          alt="animalphoto"
        />
        {/* 이미지 가져올때 img 태그 안에 style={{width:'100%', height:'100%', objectFit:'cover', borderRadius : '10px'}} 넣어주기*/}
      </div>
    </LikePreviewContainer>
  );
};

export default LikePreview;
