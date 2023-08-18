import React from "react";
import { Link } from "react-router-dom";
import AdoptList2 from "../../components/AdoptList2";

function PersonalAdopt(props) {
  const { selectedSpecies } = props;
  return (
    <div>
      <Link to="/Guidance/Agreement">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/floatingread.png"}
          alt="floatingread"
          style={{ position: "fixed", marginLeft: "310px", marginTop: "400px" }}
        />
      </Link>
      <Link to="/Adoption/WriteAdoption">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/floatingwrite.png"}
          alt="floatingwrite"
          style={{ position: "fixed", marginLeft: "240px", marginTop: "400px" }}
        />
      </Link>
      <AdoptList2 selectedSpecies={selectedSpecies} />
    </div>
  );
}

export default PersonalAdopt;
