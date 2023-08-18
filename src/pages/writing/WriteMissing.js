import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Writing.css";
import axios from "axios";

function WriteMissing(props) {
  const navigate = useNavigate();

  const handleExitClick = () => {
    // Missing 페이지로 이동
    navigate("/Missing/Missed");
  };

  const token = localStorage.getItem("token");
  const formData = new FormData(); // FormData 객체 생성

  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [openChat, setOpenChat] = useState("");

  const [kind, setKind] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [gender, setGender] = useState("");
  const [neutured, setNeutured] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
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
    console.log(imageObjectURL);
  };

  //서버에 post api 요청
  const handlePostRequest = async () => {
    if (
      date &&
      location &&
      openChat &&
      animalType &&
      kind &&
      gender &&
      neutured &&
      color &&
      age &&
      title &&
      content &&
      selectedFile
    ) {
      formData.append("lost_date", date);
      formData.append("lost_place", location);
      formData.append("contact", openChat);
      formData.append("animal_type", animalType);
      formData.append("kind", kind);
      formData.append("gender", gender);
      formData.append("is_neutered", neutured);
      formData.append("color", color);
      formData.append("age", age);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image1", selectedFile);

      console.log("formdata");
    }

    try {
      const response = await axios
        .post("http://52.78.109.86:8080/losts/", formData, {
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
        <span>실종 신고</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/exit.png"}
          alt="exit"
          id="exitBtn"
          onClick={handleExitClick}
        />
      </div>

      <div id="wm_div">
        <div id="wm_p1">
          <p>기본 정보</p>
          <form>
            <label id="wm_label">실종날짜</label>
            <input
              type="text"
              id="wm_form_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            <label id="wm_label">실종장소</label>
            <input
              type="text"
              id="wm_form_place"
              placeholder="구체적인 장소를 기입해주세요"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
            <label id="wm_label">연락처</label>
            <input
              type="text"
              id="wm_form_chat"
              placeholder="카카오톡 오픈채팅 주소"
              value={openChat}
              onChange={(e) => setOpenChat(e.target.value)}
            />
          </form>
        </div>
        <hr />

        <div id="wm_p1">
          <p>동물 정보</p>
          <form>
            <label id="wm_label">동물</label>
            <input
              type="radio"
              name="animal"
              id="wm_form_animal"
              className="wm_form_animal"
              value="dog"
              onChange={(e) => setAnimalType(e.target.value)}
            />
            <label htmlFor="wm_form_animal1" className="radioLabel">
              개
            </label>
            <input
              type="radio"
              name="animal"
              id="wm_form_animal2"
              className="wm_form_animal"
              value="cat"
              onChange={(e) => setAnimalType(e.target.value)}
            />
            <label htmlFor="wm_form_animal2" className="radioLabel">
              고양이
            </label>
            <input
              type="radio"
              name="animal"
              id="wm_form_animal3"
              className="wm_form_animal"
              value="etc"
              onChange={(e) => setAnimalType(e.target.value)}
            />
            <label htmlFor="wm_form_animal3" className="radioLabel">
              기타
            </label>
            <br />
            <label id="wm_label">품종</label>
            <input
              type="text"
              id="wm_form_sort"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            />
            <br />
            <label id="wm_label">성별</label>
            <input
              type="radio"
              name="sex"
              id="wm_form_sex1"
              className="wm_form_sex"
              value="수컷"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="wm_form_sex1" className="radioLabel">
              수컷
            </label>
            <input
              type="radio"
              name="sex"
              id="wm_form_sex2"
              className="wm_form_sex"
              value="암컷"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="wm_form_sex2" className="radioLabel">
              암컷
            </label>
            <input
              type="radio"
              name="sex"
              id="wm_form_sex3"
              className="wm_form_sex"
              value="미확인"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="wm_form_sex3" className="radioLabel">
              미확인
            </label>
            <br />
            <label id="wm_label">중성화</label>
            <input
              type="radio"
              name="neutered"
              id="wm_form_neutered1"
              className="wm_form_neutered"
              value="중성화O"
              onChange={(e) => setNeutured(e.target.value)}
            />
            <label htmlFor="wm_form_neutered1" className="radioLabel">
              O
            </label>
            <input
              type="radio"
              name="neutered"
              id="wm_form_neutered2"
              className="qm_form_neutered"
              value="중성화X"
              onChange={(e) => setNeutured(e.target.value)}
            />
            <label htmlFor="wm_form_neutered1" className="radioLabel">
              X
            </label>
            <input
              type="radio"
              name="neutered"
              id="wm_form_neutered3"
              className="wm_form_neutered"
              value="미확인"
              onChange={(e) => setNeutured(e.target.value)}
            />
            <label htmlFor="wm_form_neutered1" className="radioLabel">
              미확인
            </label>
            <br />
            <label id="wm_label">나이</label>
            <input
              type="text"
              id="wm_form_age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <label id="wm_label">털색</label>
            <input
              type="text"
              id="wm_form_weight"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <br />
          </form>
        </div>
        <hr />

        <div id="wm_p1">
          <p>제목</p>
          <form>
            <input
              type="text"
              id="wm_form_title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
          </form>
        </div>

        <div id="wm_p1">
          <p>내용</p>
          <form>
            <input
              type="text"
              id="wm_form_contents"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <br />
          </form>
        </div>
      </div>
      <div id="wm_p1">
        <p>사진 등록</p>
        <div style={ImgDivStyle}>
          <input
            type="file"
            name="image1"
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
          <div style={imgContainerStyle}>
            {imageSrc2 ? (
              <img
                id="photo"
                src={imageSrc2}
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
          <div style={imgContainerStyle}>
            {imageSrc3 ? (
              <img
                id="photo"
                src={imageSrc3}
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
        </div>
      </div>
      <form>
        <button id="wm_btn" onClick={handlePostRequest}>
          등록하기
        </button>
      </form>
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

export default WriteMissing;
