import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/EditInfo.css";

function EditPW() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleExitClick = () => {
    // EditInfo 페이지로 이동
    navigate("/Mypage/EditInfo");
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      console.error("Passwords do not match.");
      //여기 비밀번호 다르면 처리
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://52.78.109.86:8080/users/changeuserinfo/pw/",
        {
          old_pw: oldPassword,
          new_pw: newPassword,
          confirm_pw: confirmPassword,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("Password changed successfully:", response.data);
      // Handle success and navigation
    } catch (error) {
      console.error("Password change failed:", error);
      //기존의 비밀번호와 다른 경우
      // Handle error
    }
  };

  return (
    <>
      <div id="TopBar">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          class="invisibleContent"
        />
        <span>비밀번호 변경</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>

      <div id="ep_div">
        <div id="ep_p1">
          <p>기존 비밀번호</p>
          <form>
            <input
              type="password"
              id="ep_form1"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </form>
        </div>

        <div id="ep_p1">
          <p>새로운 비밀번호</p>
          <form>
            <input
              type="password"
              id="ep_form2"
              placeholder="영문/숫자/특수문자 혼합 8~20자"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              id="ep_form3"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </form>
        </div>

        <form onSubmit={handlePasswordChange}>
          <button type="submit" id="ep_btn">
            비밀번호 변경
          </button>
        </form>
      </div>
    </>
  );
}

export default EditPW;
