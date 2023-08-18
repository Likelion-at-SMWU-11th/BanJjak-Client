import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/EditInfo.css";
import Banner from "../../components/Banner";
import { ImgContainer } from "../../components/Posting";
import styled from "styled-components";

const ProfileImgContainer = styled(ImgContainer)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function EditInfo() {
  const [newprofile, setNewProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // 페이지가 처음 랜더링될 때 기존 정보를 가져오는 요청
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://52.78.109.86:8080/users/getUserInfo/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        const userInfo = response.data;

        //const updatedImage = URL.createObjectURL(userInfo.profile);
        setProfileImage(userInfo.profile);
        //console.log("profile " + userInfo.profile);
        setEmail(userInfo.email);
        setNickname(userInfo.username);
        setPhoneNumber(userInfo.phone);
      } catch (error) {
        console.error("사용자 정보 가져오기 실패:", error);
        // 에러 처리 로직 추가
      }
    };
    fetchUserInfo();
  }, []);

  const handleProfileImageUpload = async () => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("profile", newprofile);
      console.log("프로필 변경 : " + formData.get("profile"));

      const response = await axios.put(
        "http://52.78.109.86:8080/users/userChangeProfile/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data", // 이미지 업로드를 위한 헤더
          },
        }
      );
      console.log("프로필 사진 업로드 성공:", response.data);
      // 업로드 성공 후의 로직 추가
    } catch (error) {
      console.error("프로필 사진 업로드 실패:", error);
      // 에러 처리 로직 추가
    }
  };

  const handleNicknameChange = async () => {
    //console.log(nickname);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://52.78.109.86:8080/users/changeuserinfo/",
        { username: nickname },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      //put요청 성공 후 해야할 task
      console.log("닉네임 변경 성공:", response.data);
      // 수정 성공 후의 로직 추가
    } catch (error) {
      console.error("닉네임 변경 실패:", error);
      // 에러 처리 로직 추가
    }
  };
  const handlePhoneNumberChange = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://52.78.109.86:8080/users/changeuserinfo/",
        { phone: phoneNumber },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("연락처 변경 성공:", response.data);
      // 수정 성공 후의 로직 추가
    } catch (error) {
      console.error("연락처 변경 실패:", error);
      // 에러 처리 로직 추가
    }
  };

  return (
    <>
      <Banner />

      <div id="ei_editphoto">
        <label htmlFor="profileImg">
          <div id="profileImgContainer">
            <img
              src={
                profileImage
                  ? profileImage
                  : process.env.PUBLIC_URL + "/assets/icons/editphoto.png"
              }
              id="ei_photo1"
              alt="editphoto"
            />
          </div>
        </label>
        <div id="profileEditBtnDiv">
          <input
            type="file"
            id="profileImg"
            onChange={(e) => setNewProfile(e.target.files[0])}
            accept="image/*"
          />
          <button onClick={handleProfileImageUpload}>저장</button>
        </div>
      </div>

      <div id="ei_div">
        <div id="ei_nickname">
          <p id="ei_p1">닉네임</p>
          <p id="ei_p2">
            * 닉네임을 설정하면 <span>30일간 변경할 수 없습니다.</span>
          </p>
          <form>
            <input
              type="text"
              id="ei_form1"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <button id="ei_btn1" onClick={handleNicknameChange}>
              변경하기
            </button>
          </form>
        </div>

        <div id="ei_email">
          <p id="ei_p1">이메일</p>
          <p id="ei_p2">* 이메일은 변경이 불가능합니다.</p>
          <form>
            <input
              type="email"
              id="ei_form2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </form>
        </div>

        <div id="ei_password">
          <p id="ei_p1">비밀번호</p>
          <form>
            <Link to="/MyPage/EditInfo/EditPW">
              <button id="ei_btn2">변경하러 가기</button>
            </Link>
          </form>
        </div>

        <div id="ei_phonenum">
          <p id="ei_p1">연락처</p>
          <form>
            <input
              type="tel"
              id="ei_form4"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button id="ei_btn3" onClick={handlePhoneNumberChange}>
              변경하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditInfo;
