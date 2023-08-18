import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/Writing.css";
import axios from "axios";

function WriteProtection(props) {
  const navigate = useNavigate();

  const handleExitClick = () => {
    // Missing 페이지로 이동
    navigate("/Protection");
  };

  const handleLinkClick = () => {
    // 페이지 이동
    window.location.href = "/Protection";
    // 페이지 새로고침
    window.location.reload();
  };

  // 저장된 토큰 가져오기
  const token = localStorage.getItem("token");
  const formData = new FormData(); // FormData 객체 생성

  //post api 와 관련 상수
  const [openChat, setOpenChat] = useState("");
  const [name, setName] = useState("");
  const [kind, setKind] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [gender, setGender] = useState("");
  const [neutured, setNeutured] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [reason, setReason] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState("");
  const [condition, setCondition] = useState("");
  const [imageSrc, setImage] = useState(null); //이미지 태그 소스를 위한 props
  const [imageSrc2, setImage2] = useState(null); //이미지 태그 소스를 위한 props
  const [imageSrc3, setImage3] = useState(null); //이미지 태그 소스를 위한 props
  const [selectedFile, setSelectedFile] = useState(null);

  //이미지 미리보기 함수
  const handleImageUpload = async (e) => {
    setSelectedFile(e.target.files[0]);
    // 이미지 미리보기를 위한 임시 URL 생성 및 설정
    const imageObjectURL = URL.createObjectURL(e.target.files[0]);
    setImage(imageObjectURL);
  };

  //서버에 post api 요청
  const handlePostRequest = async () => {
    if (
      name &&
      openChat &&
      animalType &&
      kind &&
      gender &&
      neutured &&
      weight &&
      age &&
      reason &&
      title &&
      content &&
      alert &&
      selectedFile
    ) {
      formData.append("contact", openChat);
      formData.append("name", name);
      formData.append("animal_type", animalType);
      formData.append("kind", kind);
      formData.append("gender", gender);
      formData.append("is_neutered", neutured);
      formData.append("weight", weight);
      formData.append("age", age);
      formData.append("reason", reason);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("alert", alert);
      formData.append("image1", selectedFile);
    } else {
      window.alert("모든 항목을 입력해주세요.");
    }

    try {
      const response = axios
        .post("http://52.78.109.86:8080/requests/", formData, {
          headers: {
            Authorization: `Token ${token}`, // 헤더에 토큰 추가
            "Content-Type": "multipart/form-data", // 멀티파트 형식 설정
          },
        })
        .then((response) => {
          console.log(response.data);
        });

      // POST 요청이 성공한 경우의 처리
      console.log("POST 요청 성공:", response.data);
      navigate("/Protection"); // 페이지 전환
      //handlePostSuccess(response.data);
      // setModalOpen(true);
    } catch (error) {
      // POST 요청이 실패한 경우의 처리
      console.error("POST 요청 실패:", error);
      // 에러 처리 로직을 추가하세요.
    }
  };

  return (
    <div style={{ overflowX: "hidden", overflowY: "auto", height: "840px" }}>
      <div id="TopBar">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          class="invisibleContent"
        />
        <span>임보요청 작성</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>

      <div id="wp_div">
        <div id="wp_p1">
          <p>기본 정보</p>
          <form>
            <label id="wp_label">연락처</label>
            <input
              type="text"
              id="wp_form_chat"
              placeholder="카카오톡 오픈채팅 주소"
              value={openChat}
              onChange={(e) => setOpenChat(e.target.value)}
            />
          </form>
        </div>

        <hr />

        <div id="wp_p1">
          <p>동물 정보</p>
          <form>
            <label id="wp_label">이름</label>
            <input
              type="text"
              id="wp_form_name"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label id="wp_label">동물</label>
            <input
              type="radio"
              name="animal"
              id="wa_form_animal1"
              className="wa_form_animal"
              value="dog"
              onChange={(e) => setAnimalType(e.target.value)}
            />
            <label htmlFor="wa_form_animal1" className="radioLabel">
              개
            </label>
            <input
              type="radio"
              name="animal"
              id="wa_form_animal2"
              className="wa_form_animal"
              value="cat"
              onChange={(e) => setAnimalType(e.target.value)}
            />
            <label htmlFor="wa_form_animal2" className="radioLabel">
              고양이
            </label>
            <input
              type="radio"
              name="animal"
              id="wa_form_animal3"
              className="wa_form_animal"
              value="etc"
              onChange={(e) => setAnimalType(e.target.value)}
            />{" "}
            <label htmlFor="wa_form_animal3" className="radioLabel">
              기타
            </label>
            <br />
            <label id="wp_label">품종</label>
            <input
              type="text"
              id="wp_form_sort"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            />
            <br />
            <label id="wp_label">성별</label>
            <input
              type="radio"
              name="sex"
              id="wa_form_sex1"
              className="wa_form_sex"
              value="수컷"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="wa_form_sex1" className="radioLabel">
              수컷
            </label>
            <input
              type="radio"
              name="sex"
              id="wa_form_sex2"
              className="wa_form_sex"
              value="암컷"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="wa_form_sex2" className="radioLabel">
              암컷
            </label>
            <input
              type="radio"
              name="sex"
              id="wa_form_sex3"
              className="wa_form_sex"
              value="미확인"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="wa_form_sex3" className="radioLabel">
              미확인
            </label>
            <br />
            <label id="wp_label">중성화</label>
            <input
              type="radio"
              name="neutered"
              id="wa_form_neutered1"
              className="wa_form_neutered"
              value="중성화O"
              onChange={(e) => setNeutured(e.target.value)}
            />
            <label htmlFor="wa_form_neutered1" className="radioLabel">
              O
            </label>
            <input
              type="radio"
              name="neutered"
              id="wa_form_neutered2"
              className="wa_form_neutered"
              value="중성화X"
              onChange={(e) => setNeutured(e.target.value)}
            />
            <label htmlFor="wa_form_neutered1" className="radioLabel">
              X
            </label>
            <input
              type="radio"
              name="neutered"
              id="wa_form_neutered3"
              className="wa_form_neutered"
              value="미확인"
              onChange={(e) => setNeutured(e.target.value)}
            />
            <label htmlFor="wa_form_neutered1" className="radioLabel">
              미확인
            </label>
            <br />
            <label id="wp_label">나이</label>
            <input
              type="text"
              id="wp_form_age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <label id="wp_label">몸무게</label>
            <input
              type="text"
              id="wp_form_weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <br />
            <label id="wp_label">사유</label>
            <input
              type="text"
              id="wp_form_reason"
              placeholder="구조 사유 기입 ex)유기"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <br />
          </form>
        </div>
        <hr />

        <div id="wp_p1">
          <p>제목</p>
          <form>
            <input
              type="text"
              id="wp_form_title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
          </form>
        </div>

        <div id="wp_p1">
          <p>내용</p>
          <form>
            <input
              type="text"
              id="wp_form_contents"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <br />
          </form>
        </div>

        <div id="wp_p1">
          <p>특이사항</p>
          <form>
            <input
              type="text"
              id="wp_form_special"
              value={alert}
              onChange={(e) => setAlert(e.target.value)}
            />
            <br />
          </form>
        </div>

        <div id="wp_p1">
          <p>임보조건</p>
          <form>
            <input
              type="text"
              id="wp_form_wish"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
            <br />
          </form>
        </div>

        <div id="wa_p1">
          <p>사진 등록</p>
          <div style={ImgDivStyle}>
            <input
              type="file"
              name="image1"
              multiple={true}
              id="imageInput1"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleImageUpload(e)}
            />
            <label htmlFor="imageInput1">
              <div style={imgContainerStyle}>
                {imageSrc ? (
                  <img
                    id="photo"
                    src={imageSrc}
                    alt={`이미지1`}
                    style={imgInContainerStyle}
                  />
                ) : (
                  <img
                    id="photo"
                    src={process.env.PUBLIC_URL + "/assets/icons/plus.png"}
                    alt={`이미지 미리보기1`}
                  />
                )}
              </div>
            </label>
          </div>
        </div>

        <form>
          <button id="wp_btn" onClick={handlePostRequest}>
            <a href="/Protection" onClick={handleLinkClick}>
              등록하기
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}

const ImgDivStyle = {
  display: "flex",
  flexDirection: "row",
  margin: "1rem 0",
  justifyContent: "space-between",
  width: "340px",
};

const imgContainerStyle = {
  width: "100px",
  height: "100px",
  border: "1px dashed #D9D9D9",
  borderRadius: "10px",
  overflow: "hidden",
};

const imgInContainerStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default WriteProtection;
