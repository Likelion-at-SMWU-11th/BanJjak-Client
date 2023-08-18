import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/MyPost.css";
import Banner from "../../components/Banner";
import styled from "styled-components";
import LikePreview from "../../components/LikePreview";

const PreviewContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom : -25px;

  scrollbar-width: none;
  -ms-overflow-style: none
  &::-webkit-scrollbar {
    display: none;
  }
`;

function MyPost() {
  const [userUserPosts, setUserUserPosts] = useState([]);
  const [userLosts, setUserLosts] = useState([]);
  const [userFounds, setUserFounds] = useState([]);
  const [userRequests, setUserRequests] = useState([]);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch user's posts
    axios
      .get("http://52.78.109.86:8080/likes/my/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const data = response.data;
        setUserUserPosts(data.user_userposts);
        setUserLosts(data.user_losts);
        setUserFounds(data.user_founds);
        setUserRequests(data.user_request);
        setUserReviews(data.review_request);
      })
      .catch((error) => {
        console.error("Error fetching user posts:", error);
        // Handle error appropriately
      });
  }, []);

  return (
    <>
      <Banner />
      <p id="mp_title">내가 쓴 글</p>
      <div>
        <div id="mp_adoption">
          <p>입양하기</p>
          <PreviewContainer>
            {userUserPosts.map((post) => (
              <LikePreview key={post.id} post={post} />
            ))}
          </PreviewContainer>
        </div>

        <div id="mp_missing">
          <p>실종/목격</p>
          <PreviewContainer>
            {userLosts.map((lost) => (
              <LikePreview key={lost.id} post={lost} />
            ))}
          </PreviewContainer>
          <PreviewContainer>
            {userFounds.map((lost) => (
              <LikePreview key={lost.id} post={lost} />
            ))}
          </PreviewContainer>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="mp_protection">
          <p>임보요청</p>
          <PreviewContainer>
            {userRequests.map((request) => (
              <LikePreview key={request.id} post={request} />
            ))}
          </PreviewContainer>
        </div>

        <div id="mp_review">
          <p>입양후기</p>
          <PreviewContainer>
            {userReviews.map((review) => (
              <LikePreview key={review.id} post={review} />
            ))}
          </PreviewContainer>
        </div>
      </div>
    </>
  );
}

export default MyPost;
