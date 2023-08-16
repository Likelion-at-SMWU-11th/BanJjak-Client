import React, { useState , useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';
import '../css/Modal.css';
import axios from 'axios';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1100;
`;

const CustomCheckbox = styled.input`
    /* 체크박스를 숨기고 커스텀 스타일을 적용 */
    display: none;

    + label {
        position: relative;
        padding-left: 30px;
        padding-right: 15px;
        cursor: pointer;
        font-size: 14px;
        color: #3E3E3E;
        margin-top : 1rem;
        margin-bottom : 1rem;
    }

    + label:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0px;
        width: 20px;
        height: 20px;
        background-image: url('${process.env.PUBLIC_URL}/assets/icons/noncheck.png'); /* public 폴더 내 이미지 경로 설정 */
        background-repeat: no-repeat;
        background-size: cover;
    }

    &:checked + label:before {
        background-image: url('${process.env.PUBLIC_URL}/assets/icons/check.png'); /* public 폴더 내 이미지 경로 설정 */
    }
`;

const PostingModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const token = localStorage.getItem("token")
  // const location = useLocation();
  //const managerToken = location.state?.managerToken;

  const [username, setUsername] = useState("");
  const [usernumber, setUsernumber] = useState("");
  
  useEffect(() => {
    if (token) {
      // 서버로 사용자 정보 요청 보내기
     axios
        .get("http://127.0.0.1:8000/users/get_username/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          const user = response.data;
          console.log(user.username);
          setUsername(user.username); 
          setUsernumber(user.phone);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, [token]);

  const handleOverlayClick = (event) => {
    // 모달 외부를 클릭하면 모달 종료
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    // <div className="Modal-overlay">
    //   <div className="Modal">
    //     <button className="Modal-close" onClick={onClose}>닫기</button>
    //     <div className="Modal-content">
    //       <p>동물</p>
    //       <form id="modal_form1" size="1">
    //             <CustomCheckbox type="radio" id="modal_check1" value="all" name="species" checked={selectedCheckbox === 'all'} onChange={() => handleCheckboxChange('all')}/><label htmlFor="modal_check1">모든 동물</label><br/>
    //             <CustomCheckbox type="radio" id="modal_check2" value="dog" name="species" onChange={() => handleCheckboxChange('dog')}/><label htmlFor="modal_check2">개</label><br/>
    //             <CustomCheckbox type="radio" id="modal_check3" value="cat" name="species" onChange={() => handleCheckboxChange('cat')}/><label htmlFor="modal_check3">고양이</label><br/>
    //             <CustomCheckbox type="radio" id="modal_check4" value="else" name="species" onChange={() => handleCheckboxChange('else')}/><label htmlFor="modal_check4">기타</label><br/>
    //             <input type="button" id="modal_btn" value="검색하기"/>
    //         </form>
    //     </div>
    //   </div>
    // </div>

    <ModalOverlay>
    <ModalContent>
      <button className="Modal-close" onClick={onClose}>닫기</button>
      <div className="Modal-content">
          <p>{username}</p>
          <img src={process.env.PUBLIC_URL + '/assets/icons/logo3D.png'} id="ModalImage" alt="logo3D"/>
      </div>
      <a href={"tel:" + usernumber}>{usernumber}</a>
      {/* 누르면 전화 걸림 ㅋㅋ !!!! */}
    </ModalContent>
    </ModalOverlay>

  );
};

export default PostingModal;
