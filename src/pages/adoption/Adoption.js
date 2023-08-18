import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Adoption.css";
import FilteringModal from "../modal/FilteringModal";
import styled from "styled-components";
import Banner, { BtnList } from "../../components/Banner";
import ShelterAdopt from "./ShelterAdopt";
import PersonalAdopt from "./PersonalAdopt";

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
  z-index: 1100;
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
  z-index: 1000;
`;

function Adoption(props) {
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
  const [isShelterAdopt, setIsShelterAdopt] = useState(true);

  const ShelterAdoptStyle = {
    color: isShelterAdopt ? "#00AC78" : "#828282",
    borderBottom: isShelterAdopt ? "1px solid #00AC78" : "1px solid #ECECEC",
    cursor: isShelterAdopt ? "default" : "pointer",
  };

  const PersonalAdoptStyle = {
    color: isShelterAdopt ? "#828282" : "#00AC78",
    borderBottom: isShelterAdopt ? "1px solid #ECECEC" : "1px solid #00AC78",
    cursor: isShelterAdopt ? "pointer" : "default",
  };

  const handleAdoptTypeChange = () => {
    if (!isShelterAdopt) {
      setIsShelterAdopt(true);
    }
  };

  return (
    <>
      <Banner />

      <Link to="/Adoption/ShelterAdopt">
        <div
          id="shelter"
          style={ShelterAdoptStyle}
          onClick={handleAdoptTypeChange}
        >
          <p>보호소</p>
        </div>
      </Link>

      <Link to="/Adoption/PersonalAdopt">
        <div
          id="temporary"
          style={PersonalAdoptStyle}
          onClick={() => setIsShelterAdopt(false)}
        >
          <p>임시보호</p>
        </div>
      </Link>
      <br />

      <GreenBtn onClick={openModal}>동물</GreenBtn>
      <SpeciesBtn>{selectedSpecies || "모든 동물"}</SpeciesBtn>
      <br />

      {/* Correct placement of the FilteringModal */}
      {modalOpen && (
        <FilteringModal
          isOpen={modalOpen}
          onClose={closeModal}
          onSearch={handleSpeciesChange}
        />
      )}

      <div
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          height: "620px",
          marginTop: "1px",
        }}
      >
        <br />

        <div id="adoptlist">
          {isShelterAdopt && <ShelterAdopt selectedSpecies={selectedSpecies} />}
          {!isShelterAdopt && (
            <PersonalAdopt selectedSpecies={selectedSpecies} />
          )}
        </div>
      </div>
    </>
  );
}

export default Adoption;
