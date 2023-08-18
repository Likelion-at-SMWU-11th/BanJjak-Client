import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/EditInfo.css";

const DivCenter = {
  paddingLeft: "5%",
};

const ShelterEditInfo = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    // Login 페이지로 이동
    navigate("/HomeShelter");
  };

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // 페이지가 처음 랜더링될 때 기존 정보를 가져오는 요청
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://52.78.109.86:8080/users/changemanagerinfo/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        const userInfo = response.data;
        //console.log(userInfo);
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

  const handleNicknameChange = async () => {
    //console.log(nickname);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://52.78.109.86:8080/users/changemanagerinfo/",
        { username: nickname },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      //console.log("!!");
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
        "http://52.78.109.86:8080/users/changemanagerinfo/",
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
      <div id="TopBar">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          className="invisibleContent"
        />
        <span>내 정보 수정</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>
      <div style={DivCenter}>
        <div id="ei_email">
          <p id="ei_p1_2">이메일</p>
          <form>
            <input
              type="email"
              id="ei_form2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </form>
          <p className="detailDescription">이메일은 변경이 불가능합니다.</p>
        </div>

        <div id="ei_password">
          <p id="ei_p1_2">비밀번호</p>
          <form>
            <Link to="/HomeShelter/ShelterEditInfo/ShelterEditPW">
              <button id="ei_btn2">변경하러 가기</button>
            </Link>
          </form>
        </div>
      </div>

      <div id="ei_div">
        <div id="ei_nickname">
          <p id="ei_p1_2">닉네임</p>
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
          <p className="detailDescription">
            보호소명은 사이트에서 변경이 불가합니다.
            <br />
            반짝 고객센터(02-710-1234)로 연결 바랍니다.
          </p>
        </div>

        <div id="ei_phonenum">
          <p id="ei_p1_2">연락처</p>
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
};

export default ShelterEditInfo;
