import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Missing.css";
import FilteringModal from "../modal/FilteringModal";
import styled from "styled-components";
import Banner from "../../components/Banner";
import Missed from "./Missed";
import Seen from "./Seen";

const GreenBtn = styled.button`
  color: white;
  background: #00ac78;
  border: 0.5px solid #00ac78;
  border-radius: 20px;
  display: inline-block;
  width: 190px;
  height: 35px;
  margin: 20px 0px 0px 20px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const SpeciesBtn = styled.button`
  color: #00ac78;
  background: white;
  border: 0.5px solid #00ac78;
  border-radius: 20px;
  display: inline;
  width: 190px;
  height: 35px;
  margin-left: -30px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

function Missing(props) {
  // 모달관련
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSpeciesChange = (species) => {
    setSelectedSpecies(species);
  };

  //하위라우팅 관련
  const [isMissed, setIsMissed] = useState(true);

  const MissedStyle = {
    color: isMissed ? "#00AC78" : "#828282",
    borderBottom: isMissed ? "1px solid #00AC78" : "1px solid #ECECEC",
    cursor: isMissed ? "default" : "pointer",
  };

  const SeenStyle = {
    color: isMissed ? "#828282" : "#00AC78",
    borderBottom: isMissed ? "1px solid #ECECEC" : "1px solid #00AC78",
    cursor: isMissed ? "pointer" : "default",
  };

  const handleMissingTypeChange = () => {
    if (!isMissed) {
      setIsMissed(true);
    }
  };

  return (
    <>
      <Banner />

      <Link to="/Missing/Missed">
        <div id="miss" style={MissedStyle} onClick={handleMissingTypeChange}>
          <p>실종</p>
        </div>
      </Link>

      <Link to="/Missing/Seen">
        <div id="seen" style={SeenStyle} onClick={() => setIsMissed(false)}>
          <p>목격</p>
        </div>
      </Link>
      <br />

      <GreenBtn onClick={openModal}>동물</GreenBtn>
      <SpeciesBtn>{selectedSpecies || "모든 동물"}</SpeciesBtn>
      <br />

      {/* Correct placement of the FilteringModal */}
      {modalOpen && <FilteringModal isOpen={modalOpen} onClose={closeModal} />}

      <div style={{ overflowX: "hidden", overflowY: "auto", height: "620px" }}>
        <br />
        <div>
          {isMissed && <Missed />}
          {!isMissed && <Seen />}
        </div>
      </div>
    </>
  );
}

export default Missing;
