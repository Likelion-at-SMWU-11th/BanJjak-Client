import React, { useState } from 'react';
import styled from 'styled-components';
import '../../css/Modal.css';

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

const FilteringModal = ({ isOpen, onClose }) => {

  const [selectedCheckbox, setSelectedCheckbox] = useState('all');

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
  };

  if (!isOpen) return null;

  return (
    <div className="Modal-overlay">
      <div className="Modal">
        <button className="Modal-close" onClick={onClose}>닫기</button>
        <div className="Modal-content">
          <p>동물</p>
          <form id="modal_form1" size="1">
                <CustomCheckbox type="radio" id="modal_check1" value="all" name="species" checked={selectedCheckbox === 'all'} onChange={() => handleCheckboxChange('all')}/><label htmlFor="modal_check1">모든 동물</label><br/>
                <CustomCheckbox type="radio" id="modal_check2" value="dog" name="species" onChange={() => handleCheckboxChange('dog')}/><label htmlFor="modal_check2">개</label><br/>
                <CustomCheckbox type="radio" id="modal_check3" value="cat" name="species" onChange={() => handleCheckboxChange('cat')}/><label htmlFor="modal_check3">고양이</label><br/>
                <CustomCheckbox type="radio" id="modal_check4" value="else" name="species" onChange={() => handleCheckboxChange('else')}/><label htmlFor="modal_check4">기타</label><br/>
                <input type="button" id="modal_btn" value="검색하기"/>
            </form>
        </div>
      </div>
    </div>
  );
};

export default FilteringModal;
