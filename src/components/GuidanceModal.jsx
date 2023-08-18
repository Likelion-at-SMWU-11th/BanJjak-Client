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
  width : 320x;
  // height : 240px;
  background-color: white;
  padding-top: 20px;
  padding-bottom : 0px;
  border-radius: 5px;
  font-weight: bold;
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

const GuidanceModal = ({ isOpen, setIsModalOpen, onClose}) => {
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
      <button id="Modal-close" onClick={onClose} style={{border : 'none', width:'10px', heightL:'10px'}}>
        <img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="gmd_exit" alt="exit"
        style={{width : '10px', height :'10px', marginLeft : '-20px', marginTop:'-5px'}}/>
        </button>
        <div id="gmd_body">
                <p id="gmd_title">입양 안내를 먼저 확인해주세요!</p>
                <Link to="/Adoption/AdoptDetail"><img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="gmd_exit" alt="exit"/></Link><br/>
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="gmd_logo2D" alt="logo2D"/>
                <p id="gmd_contents">입양 안내를 확인하지 않으셨네요.<br/>반짝은 유기동물이 좋은 가족을 만날 수 있도록<br/>관련 동의를 우선적으로 진행하고 있습니다.</p>
                <Link to="/Guidance/Agreement" style={{textDecorationColor : '#00AC78'}}><p id="gmd_goto">입양안내 바로가기</p></Link>
            </div>
    </ModalContent>
    </ModalOverlay>

  );
};

export default GuidanceModal;
