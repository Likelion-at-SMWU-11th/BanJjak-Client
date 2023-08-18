import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import useDetectClose from "../hooks/useDetectClose";
import Dropdown from "./Dropdown";
import { Dropdown2, Dropdown3 } from "./Dropdown";
import Tags from "./Tags";
import PostingModal from "./PostingModal";
import axios from "axios";

const formStyle = {
  padding: "1rem",
  boxSizing: "content-box",
  display: "flex",
  flexDirection: "column",
};

const InputDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  label {
    font-size: 38px;
    font-weight: 600;
  }

  input {
    display: block;
    margin-top: 0.5rem;
    border-radius: 5px;
    border: 1px solid #000;
    font-size: 30px;
    font-weight: 300;
    padding: 0.5rem;
  }
`;

const TagDiv = styled(InputDiv)`
  label {
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
  }
`;

const TextDiv = styled(InputDiv)`
  label {
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
  }

  textarea {
    height: 7rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 30px;
    font-weight: 300;
    line-height: normal;
  }
`;

const ImgInputDiv = styled(InputDiv)`
  .ImgDiv {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .eachImgDiv {
      position: relative;

      #editIcon {
        position: absolute;
        left: 4rem;
        top: 4rem;
        width: 2rem;
        z-index: 2;
      }
    }
  }
`;

const ImgContainer = styled.div`
  border: 1px solid #828282;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  #photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RowDiv = styled(InputDiv)`
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 45%;
  }

  & > div#textDiv {
    display: flex;
    flex-direction: column;
  }

  & > div#dropdownDiv {
    ul {
      font-size: 30px;
      font-weight: 300;
      padding: 0.5rem;
      border: 1px solid black;
      border-radius: 5px;
      color: #828282;
    }

    ul:hover {
      cursor: pointer;
    }

    li:hover {
      color: #00ac78;
    }
  }
`;
const DropdownInput = styled.input`
  width: 100%; /* input의 너비를 100%로 설정 */
  background: white;
  text-align: left;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const SubmitDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    height: 4rem;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #00ac78;
    font-size: 30px;
    font-weight: 600;
    background: white;
    padding: 0.5rem;
  }

  button > a {
    color: #00ac78;
    text-decoration: none;
  }

  input {
    height: 4rem;
    color: white;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    border-radius: 5px;
    border: none;
    background: #00ac78;
    padding: 1rem 2rem;
  }
`;

const smallFont = {
  fontSize: "30px",
};

const Posting = () => {
  const location = useLocation();
  const managerToken = location.state?.managerToken;
  console.log("managerToken:", managerToken);

  // dropdown 관련
  const dropDownRefs = {
    animal: useRef(),
    sex: useRef(),
    neutered: useRef(),
  };

  const [name, setName] = useState(""); // 동물 이름 상태
  const [kind, setKind] = useState(""); // 종 상태
  const [weight, setWeight] = useState(""); // 몸무게 상태
  const [age, setAge] = useState(""); // 나이 상태
  const [animalValue, setAnimalValue] = useState(""); //동물 상태
  const [sexValue, setSexValue] = useState(""); //성별 상태
  const [neuteredValue, setNeuteredValue] = useState(""); //중성화 상태
  const [content, setContent] = useState(""); //관리자 한마디 상태

  const [alert, setAlert] = useState(""); //특이사항 상태

  const animalList = ["개", "고양이", "기타"];
  const sexList = ["수컷", "암컷", "미확인"];
  const neuteredList = ["중성화O", "중성화X", "미확인"];

  const [isOpen1, setIsOpen1] = useDetectClose(dropDownRefs.animal, false);
  const [isOpen2, setIsOpen2] = useDetectClose(dropDownRefs.sex, false);
  const [isOpen3, setIsOpen3] = useDetectClose(dropDownRefs.neutered, false);

  const [modalOpen, setModalOpen] = useState(false); // 모달창 노출 여부 state

  //이미지 업로드 관련
  // const [images, setImages] = useState([null, null, null]);
  const [imageSrc, setImage] = useState(null);  //이미지 태그 소스를 위한 props
  const token = localStorage.getItem("token"); // 저장된 토큰 가져오기
  const formData = new FormData(); // FormData 객체 생성
  const [selectedFile, setSelectedFile]=useState(null);
  console.log(selectedFile)


  const handleImageUpload = async (e) => {
    setSelectedFile(e.target.files[0]);
      // 이미지 미리보기를 위한 임시 URL 생성 및 설정
      const imageObjectURL = URL.createObjectURL(e.target.files[0]);
      setImage(imageObjectURL);
  };
  // const floatModal = async() =>{
  //   try{
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get("http://52.78.109.86:8080/users/get_username/",{
  //       headers:{
  //         Authorization: `Token ${token}`,
  //      },
  //     })
  //   }
  //   .then((response)=>
  //     const user=response.data;

  //     )
  //   handlePostRequest();
  // }
  //서버로 데이터 전송
  const handlePostRequest = async () => {
    // showModal();

    // const hasAtLeastOneImage = images.some((image) => image !== null);
    // if (!hasAtLeastOneImage) {
    //   window.alert("적어도 1개 이상의 이미지가 필요합니다.");
    //   return; // 이미지가 없으면 함수 종료
    // }

    // 다른 데이터를 FormData에 추가
    // formData.append("name", name);
    if (name && content && alert) {
      formData.append("name", name);
      formData.append("kind", kind);
      formData.append("weight", weight);
      formData.append("age", age);
      formData.append("gender", sexValue);
      formData.append("is_neutered", neuteredValue);
      formData.append("content", content);
      formData.append("alert", alert);
      formData.append('image1',selectedFile)
  }

  if(animalValue){
    if (animalValue === '개') {
      formData.append("animal_type", 'dog');
    } else if (animalValue === '고양이') {
      formData.append("animal_type", 'cat');
    } else if (animalValue === '기타') {
      formData.append("animal_type", 'etc');
    }
  }
  
    // formData.append("hastags", null);
    try {
      const response=axios.post(
        "http://52.78.109.86:8080/posts/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`, // 헤더에 토큰 추가
            "Content-Type": "multipart/form-data", // 멀티파트 형식 설정
          },
        }
      ).then(response => {
        console.log(response.data);
      })

      // POST 요청이 성공한 경우의 처리
      console.log("POST 요청 성공:", response.data);
      //handlePostSuccess(response.data);
      setModalOpen(true); 
      // 추가적인 로직 또는 상태 업데이트 등을 처리할 수 있습니다.
    } catch (error) {
      // POST 요청이 실패한 경우의 처리
      console.error("POST 요청 실패:", error);
      // 에러 처리 로직을 추가하세요.
    }
  };

  return (
    <>
      <form style={formStyle} >
        <InputDiv>
          <label>공고 동물 이름</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="동물의 이름을 적어주세요."
          ></input>
        </InputDiv>
        <ImgInputDiv>
          <label>
            공고동물 사진 <span style={smallFont}>(최대 3장)</span>
          </label>
          <div className="ImgDiv">
          <div className="eachImgDiv">
                <input
                  type="file"
                  name="image1"
                  id="imageInput1"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e)=>handleImageUpload(e)}
                />
                <label htmlFor="imageInput1">
                <ImgContainer>
                    {imageSrc ? (
                      <img
                        id="photo"
                        src={imageSrc}
                        alt={`이미지1`}
                      />
                    ) : (
                      <img
                        id="photo"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/icons/img_preview.png"
                        }
                        alt={`이미지 미리보기1`}
                      />
                    )}
                  </ImgContainer>
                </label>
            {/* {images.map((imageSrc, index) => (
              <div className="eachImgDiv" key={index}>
                <input
                  type="file"
                  id={`imageInput-${index}`}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(event) => handleImageUpload(event, index)}
                />
                <label htmlFor={`imageInput-${index}`}>
                  <ImgContainer>
                    {imageSrc ? (
                      <img
                        id="photo"
                        src={imageSrc}
                        alt={`이미지 ${index + 1}`}
                      />
                    ) : (
                      <img
                        id="photo"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/icons/img_preview.png"
                        }
                        alt={`이미지 미리보기 ${index}`}
                      />
                    )}
                  </ImgContainer>
                </label> */}
                <img
                  id="editIcon"
                  src={process.env.PUBLIC_URL + "/assets/icons/edit.png"}
                  alt={`편집 아이콘`}
                />
              </div>
          </div>
        </ImgInputDiv>
        <RowDiv>
          <div ref={dropDownRefs.animal} id="dropdownDiv">
            <label>동물</label>
            <DropdownInput
              onClick={() => setIsOpen1(!isOpen1)}
              type="input"
              value={animalValue || (isOpen1? "선택": animalValue)}
            />
            {isOpen1 && (
              <ul>
                {animalList.map((value, index) => (
                  <Dropdown
                    key={index}
                    value={value}  
                    setIsOpen1={setIsOpen1}
                    setAnimalValue={setAnimalValue}
                    isOpen1={isOpen1}
                  />
                ))}
              </ul>
            )}
          </div>
          <div id="textDiv">
            <label>종</label>
            <input
              type="text"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
              placeholder="미확인"
            />
          </div>
        </RowDiv>

        <RowDiv>
          <div id="textDiv">
            <label>몸무게</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="미확인"
            />
          </div>
          <div id="textDiv">
            <label>나이</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="미확인"
            />
          </div>
        </RowDiv>

        <RowDiv>
          <div ref={dropDownRefs.sex} id="dropdownDiv">
            <label>성별</label>
            <DropdownInput
              onClick={() => setIsOpen2(!isOpen2)}
              type="input"
              value={sexValue || (isOpen2 ? sexValue : "선택")}
            />
            {isOpen2 && (
              <ul>
                {sexList.map((value, index) => (
                  <Dropdown2
                    key={index}
                    value={value}
                    setIsOpen2={setIsOpen2}
                    setSexValue={setSexValue}
                    isOpen2={isOpen2}
                  />
                ))}
              </ul>
            )}
          </div>
          <div ref={dropDownRefs.neutered} id="dropdownDiv">
            <label>중성화</label>
            <DropdownInput
              onClick={() => setIsOpen3(!isOpen3)}
              type="input"
              value={neuteredValue || (isOpen3 ? neuteredValue : "선택")}
            />
            {isOpen3 && (
              <ul>
                {neuteredList.map((value, index) => (
                  <Dropdown3
                    key={index}
                    value={value}
                    setIsOpen3={setIsOpen3}
                    setNeuteredValue={setNeuteredValue}
                    isOpen3={isOpen3}
                  />
                ))}
              </ul>
            )}
          </div>
        </RowDiv>
        <TagDiv>
          <label>
            동물을 나타내는 단어를 선택해 주세요.{" "}
            <span style={smallFont}>(최대 5개)</span>
          </label>
          {/* 해시태그 부분 */}
          <Tags />
        </TagDiv>
        <TextDiv>
          <label>
            관리자 한 마디 <span style={smallFont}>(최대 70자)</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="동물에 관한 한마디를 적어주세요."
            required
          ></textarea>
        </TextDiv>
        <TextDiv>
          <label>특이사항</label>
          <textarea
            value={alert}
            onChange={(e) => setAlert(e.target.value)}
            placeholder="입양자가 알아야 할 특이사항을 알려주세요."
          ></textarea>
        </TextDiv>
        <SubmitDiv>
          <button>
            <Link>미리 보기</Link>
          </button>
          <input type="button" value="작성 완료" onClick={handlePostRequest} />
          {modalOpen && (
            <PostingModal 
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
            />
          )}
        </SubmitDiv>
      </form>
    </>
  );
};


export default Posting;
export {ImgContainer}
export {ImgInputDiv}
