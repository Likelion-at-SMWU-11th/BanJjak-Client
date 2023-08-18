import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Protection.css";
import FilteringModal from "../modal/FilteringModal";
import styled from "styled-components";
import Banner from "../../components/Banner";
import ProtectList from "../../components/ProtectList";

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

function Protection(props) {
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

  return (
    <>
      <Banner />

      <div id="lookfor">
        <p>임보요청</p>
      </div>
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

      <div style={{ overflowX: "hidden", overflowY: "auto", height: "620px" }}>
        <Link to="/Protection/WriteProtection">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/floatingwrite.png"}
            alt="floatingwrite"
            style={{
              position: "fixed",
              marginLeft: "310px",
              marginTop: "440px",
            }}
          />
        </Link>

        <br />
        <div id="protectlist">
          <ProtectList selectedSpecies={selectedSpecies} />
        </div>
      </div>
    </>
  );
}

export default Protection;
