import React, { useState , useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';
import '../css/PostingModal.css';
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
  width : 329px;
  // height : 400px;
  background-color: white;
  padding-top: 20px;
  padding-bottom : 0px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1100;
  text-align : center;
`;

const btnDivStyle={
  display: "flex",
  flexDirection: "row",
  borderTop: "2px solid #00ac78",
  borderBottom: "transparent",
}

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
        .get("http://52.78.109.86:8080/users/get_username/", {
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
    
    <ModalOverlay>
    <ModalContent>
      <button id="Modal-close" onClick={onClose} style={{border : 'none', width:'10px', heightL:'10px'}}>
        <img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="gmd_exit" alt="exit"
        style={{width : '10px', height :'10px', marginLeft : '-20px', marginTop:'-5px'}}/>
        </button>
      <div id="Modal-content">
          <p id="confirm">보호소 정보 확인</p>

          <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D_resize2.png'} id="ModalImage" alt="logo3D"
          style={{width : '120px', height :'112px', marginTop : '10px'}}/>

          <p style={{color : '#3E3E3E', fontSize:'25px', marginTop: '1rem'}}> 보호소&nbsp;<span style={{fontWeight :'bold'}}>{username}</span></p>
          <p style={{color : '#3E3E3E', fontSize:'25px', marginTop: '0.5rem'}}>연락처 &nbsp;
          <a href={"tel:" + usernumber} style={{color : '#3E3E3E', fontSize:'25px', fontWeight:'bold', textDecoration:'none'}}>{usernumber}</a>
          {/* 누르면 전화 걸림 ㅋㅋ !!!! */}</p>
          
          <p style={{color : '#828282', fontSize:'20px', marginTop : '15px', marginBottom : '15px' , lineHeight:'25px'}}>
            입양희망자에게<br/>해당 연락처가 안내됩니다.</p>
        </div>
        <div style={btnDivStyle}>
          <button id="modal_btn1"><Link to="/HomeShelter/ShelterEditInfo">연락처 변경</Link></button>
          <button id="modal_btn2"><Link to="/HomeShelter/ShelterPostsList">맞습니다</Link></button> 
        </div>
      
    </ModalContent>
    </ModalOverlay>

  );
};

export default PostingModal;
