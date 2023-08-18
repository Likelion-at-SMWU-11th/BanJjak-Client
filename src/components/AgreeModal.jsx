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
  width : 320px;
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

const AgreeModal = ({ isOpen, setIsModalOpen, onClose}) => {
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
        <div id="amd_body">
                <p id="amd_title">동의 완료!</p>
                <img src={process.env.PUBLIC_URL + '/assets/icons/logo2D.png'} id="amd_logo2D" alt="logo2D"/>
                <p id="amd_manage1">반짝은 유기동물이 좋은 가족을 만날 수 있도록<br/>미리 입양 절차 동의를 안내하고 있습니다.
                                    <br/>동의를 완료하셨으므로 입양 문의가 가능합니다.<br/>좋은 마음으로 반짝을 찾아와주셔서 감사합니다.</p>
                <p id="amd_manage2">입양/임보 문의 시 관리자 측에서 요구하는<br/>추가적인 조건이 있을 수 있습니다.</p>
                <div id="amd_btn">
                    <Link to="/Home"><p id="amd_more">더 둘러보기</p></Link>
                    <Link to="/Adoption"><p id="amd_goadopt">입양하러 가기</p></Link>
                </div>
            </div>
      
    </ModalContent>
    </ModalOverlay>

  );
};

export default AgreeModal;
