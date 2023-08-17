
import React, { useState , useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../../css/Modal.css';



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
  width: 330px;
  height: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1100;

  position: relative;
`;

const CustomCheckbox = styled.input`

    /* 체크박스를 숨기고 커스텀 스타일을 적용 */
    display: none;

    + label {
        position: relative;
        padding-left: 30px;
        padding-right: 15px;
        padding-top: 5px;
        cursor: pointer;
        font-size: 14px;
        color: #3E3E3E;
        margin-top : 0.rem;
        margin-bottom : 0.rem;
    }


  + label {
    position: relative;
    padding-left: 30px;
    padding-right: 15px;
    cursor: pointer;
    font-size: 14px;
    color: #3e3e3e;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0px;
    width: 20px;
    height: 20px;
    background-image: url("${process.env
      .PUBLIC_URL}/assets/icons/noncheck.png"); /* public 폴더 내 이미지 경로 설정 */
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:checked + label:before {
    background-image: url("${process.env
      .PUBLIC_URL}/assets/icons/check.png"); /* public 폴더 내 이미지 경로 설정 */
  }
`;


const FilteringModal = ({ isOpen, onClose, onSpeciesChange }) => {

  const modalRef = useRef(null);
  const navigate=useNavigate(); 

  const [selectedCheckbox, setSelectedCheckbox] = useState("all");

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
    onSpeciesChange(value);
  };

  
  const handleSearchButtonClick = () => {
    // 선택한 동물 종류에 따라 다른 URL로 이동
    const currentPath=window.location.pathname;
    let targetUrl=currentPath;
    if (selectedCheckbox === 'dog') {
      targetUrl+='/'+selectedCheckbox;
      navigate(targetUrl);
    } else if (selectedCheckbox === 'cat') {
      targetUrl+=selectedCheckbox;
      navigate(targetUrl);
    } else if (selectedCheckbox === 'else') {
      targetUrl+=selectedCheckbox;
      navigate(targetUrl);
    } else if (selectedCheckbox == 'all') {
      // 'all'을 선택했을 때에 대한 처리
      navigate(targetUrl);
      onClose();
    }
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
      // ESC 키를 누르면 모달 종료
      if (event.key === "Escape") {
        onClose();
      }
    };
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return; // 모달이 열려있을 때만 실행
    const handleSearchButtonClick = () => {
      // 검색하기 버튼을 눌렀을 때 호출되는 함수
      onSpeciesChange(selectedCheckbox); // 선택된 동물 종류 정보를 전달
      onClose(); // 모달 닫기
    };
    // 검색하기 버튼 클릭 이벤트 리스너 등록
    const searchButton = document.getElementById("modal_btn");
    searchButton.addEventListener("click", handleSearchButtonClick);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      searchButton.removeEventListener("click", handleSearchButtonClick);
    };
  }, [onSpeciesChange]);

  const handleOverlayClick = (event) => {
    // 모달 외부를 클릭하면 모달 종료
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  if (!isOpen) return null;


  const handleSearchButtonClick = () => {
    // 검색하기 버튼을 눌렀을 때 호출되는 함수
    onSpeciesChange(selectedCheckbox); // 선택된 동물 종류 정보를 전달
    onClose(); // 모달 닫기
  };

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


  return (
    <ModalOverlay>
    <ModalContent>
      <button className="Modal-close" onClick={onClose}><img src={process.env.PUBLIC_URL + '/assets/icons/exit.png'} id="gmd_exit" alt="exit"/></button>
      <div className="Modal-content">
          <p>동물</p>
          <form id="modal_form1" size="1">
                <CustomCheckbox type="radio" id="modal_check1" value="all" name="species" checked={selectedCheckbox === 'all'} onChange={() => handleCheckboxChange('all')}/><label htmlFor="modal_check1">모든 동물</label><hr/>
                <CustomCheckbox type="radio" id="modal_check2" value="dog" name="species" onChange={() => handleCheckboxChange('dog')}/><label htmlFor="modal_check2">개</label><hr/>
                <CustomCheckbox type="radio" id="modal_check3" value="cat" name="species" onChange={() => handleCheckboxChange('cat')}/><label htmlFor="modal_check3">고양이</label><hr/>
                <CustomCheckbox type="radio" id="modal_check4" value="else" name="species" onChange={() => handleCheckboxChange('else')}/><label htmlFor="modal_check4">기타</label><br/>
                <input type="button" id="modal_btn" value="검색하기" onClick={handleSearchButtonClick}/>
            </form>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FilteringModal;