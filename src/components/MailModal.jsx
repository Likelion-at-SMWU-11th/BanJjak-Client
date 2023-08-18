import React, { useState , useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';
import '../css/Modal.css';

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
  width : 260x;
  // height : 270px;
  background-color: white;
  padding-top: 20px;
  padding-bottom : 0px;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1100;
  text-align : center;
  font-weight: bold;
`;

const btnDivStyle={
  display: "flex",
  flexDirection: "row",
  borderTop: "2px solid #00ac78",
  borderBottom: "transparent",
}

const MailModal = ({ isOpen, setIsModalOpen, onClose}) => {
    const handleModalClose = () => {
        setIsModalOpen(false);
        onClose();
    };

    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  const modalRef = useRef(null);

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
      <button id="Modal-close" onClick={onClose} style={{border : 'none', width:'10px', height:'12px'}}>
        <img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="gmd_exit" alt="exit"
        style={{width : '10px', height :'10px', marginLeft : '-20px', marginTop:'-5px'}}/>
        </button>
        <div id="mmd_body">
                <p id="mmd_title">간편메일</p>
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="mmd_logo2D" alt="logo2D"/>
                <p id="mmd_mail">banjjak@naver.com</p>
                <p id="mmd_manage">[고객센터 업무 시간]<br/>평일 9:00~17:00<br/>주말과 공휴일에는 운영하지 않습니다.</p>
            </div>
    </ModalContent>
    </ModalOverlay>

  );
};

export default MailModal;
