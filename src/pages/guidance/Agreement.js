import React, { useState } from "react";
import styled from "styled-components";
import "../../css/Guidance.css";
import AgreeModal from "../../components/AgreeModal";
import axios from "axios";

const CustomCheckbox = styled.input`
  /* 체크박스를 숨기고 커스텀 스타일을 적용 */
  display: none;

  + label {
    position: relative;
    padding-left: 30px;
    padding-right: 15px;
    cursor: pointer;
    font-size: 14px;
    color: #3e3e3e;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
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

function Agreement(props) {
  const [allChecked, setAllChecked] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    ga_check1: false,
    ga_check2: false,
    ga_check3: false,
    ga_check4: false,
    ga_check5: false,
    ga_check6: false,
    ga_check7: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부 상태 추가

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;

    if (id === "ga_allcheck") {
      setAllChecked(checked);
      setCheckboxStates({
        ga_check1: checked,
        ga_check2: checked,
        ga_check3: checked,
        ga_check4: checked,
        ga_check5: checked,
        ga_check6: checked,
        ga_check7: checked,
      });
    } else {
      setCheckboxStates((prevState) => ({
        ...prevState,
        [id]: checked,
      }));
      setAllChecked(
        Object.values({
          ...checkboxStates,
          [id]: checked,
        }).every((val) => val)
      );
    }
  };

  const handleCompleteClick = async () => {
    if (!allChecked) {
      setIsModalOpen(false);
      alert("모든 입양 절차에 동의해야 입양 서비스 이용이 가능합니다.");
    } else {
      try {
        // Send a PUT request to update user's is_agree field
        await axios.put(
          "http://52.78.109.86:8080/users/changeuserinfo/isagree/",
          { is_agree: true },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );

        setIsModalOpen(true);
      } catch (error) {
        console.error("Error updating is_agree:", error);
        // Handle error appropriately
      }
    }
  };

  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/assets/icons/agreement.png"}
        id="ga_banner"
        alt="ga_banner"
      />
      <p id="ga_p1">모두 체크하신 후 입양 문의 진행이 가능합니다.</p>

      <form id="ga_form1">
        <CustomCheckbox
          type="checkbox"
          id="ga_check1"
          checked={checkboxStates.ga_check1}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_check1">
          입양 시 각 지자체에 따라 일부 경비가 청구될 수 있습니다.{" "}
        </label>
        <br />
        <CustomCheckbox
          type="checkbox"
          id="ga_check2"
          checked={checkboxStates.ga_check2}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_check2">
          시군구청에서 보호하고 있는 유기동물 중 공고 10일 이후에도 주인이
          나타나지 않는 경우일반인에게 분양할 수 있습니다.
        </label>
        <br />
        <CustomCheckbox
          type="checkbox"
          id="ga_check3"
          checked={checkboxStates.ga_check3}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_check3">
          입양 보호시설에 미리 전화로 문의하신 후 담당자의 안내에 따라 방문 일시
          등을 예약하시면 됩니다.
        </label>
        <br />
        <CustomCheckbox
          type="checkbox"
          id="ga_check4"
          checked={checkboxStates.ga_check4}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_check4">
          입양 시 신분증 복사본 2장과 필요한 반려동물 물품을 준비하고 보호시설에
          방문해 계약서를 작성합니다.{" "}
          <span id="ga_span1">
            * 보호소별로 요청하는 서류는 상이할 수 있습니다.
          </span>
        </label>
        <br />
        <CustomCheckbox
          type="checkbox"
          id="ga_check5"
          checked={checkboxStates.ga_check5}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_check5">
          입양 보호시설에는 신청자 본인이 직접 방문해야 합니다.
        </label>
        <br />
        <CustomCheckbox
          type="checkbox"
          id="ga_check6"
          checked={checkboxStates.ga_check6}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_check6">
          미성년자는 동물을 입양할 수 없으며 입양을 원할 경우 보호자(부모님)의
          허락을 얻어 반드시 보호자(부모님)과 함께 방문해야 합니다.
        </label>
        <br />
        <CustomCheckbox
          type="checkbox"
          id="ga_check7"
          checked={checkboxStates.ga_check7}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_check7">
          보호소의 정확한 위치는 보호소 위치 노출 방지를 위해 입양 확정 후
          안내됩니다.
        </label>
        <br />
        <br />
        <CustomCheckbox
          type="checkbox"
          id="ga_allcheck"
          checked={allChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ga_allcheck">
          <span id="ga_span2">위 내용을 모두 확인했으며 동의합니다.</span>
        </label>
        <br />
        <input
          type="button"
          id="ga_btn"
          value="완료하기"
          onClick={handleCompleteClick}
        />
        {isModalOpen && (
          <AgreeModal
            isOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </form>
    </div>
  );
}

export default Agreement;
