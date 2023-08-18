import React from "react";
import { Link } from "react-router-dom";
import AdoptList from "../../components/AdoptList";

function ShelterAdopt(props) {
  return (
    <div>
      <Link to="/Guidance/Agreement">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/floatingread.png"}
          alt="floatingread"
          style={{ position: "fixed", marginLeft: "300px", marginTop: "400px" }}
        />
      </Link>
      <AdoptList />
    </div>
  );
}

export default ShelterAdopt;