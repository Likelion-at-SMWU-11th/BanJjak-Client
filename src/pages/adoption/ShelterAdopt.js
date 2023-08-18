import React from "react";
import { Link } from "react-router-dom";
import AdoptList from "../../components/AdoptList";

function ShelterAdopt(props) {
  const { selectedSpecies } = props;
  return (
    <div>
      <Link to="/Guidance/Agreement">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/floatingread.png"}
          alt="floatingread"
          style={{ position: "fixed", marginLeft: "300px", marginTop: "400px" }}
        />
      </Link>
      <AdoptList selectedSpecies={selectedSpecies} />
    </div>
  );
}

export default ShelterAdopt;
