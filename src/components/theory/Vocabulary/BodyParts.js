import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../cards/TheoryCards";
import { Link } from "react-router-dom";
//Styles
import "../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BodyPartsVocabulary = () => {
  const { list: body } = useSelector((state) => state.body);

  return (
    <div>
      <div className="ms-4 mt-3">
        <Link to={"/Vocabulario"}>
          <div
            className="btn btn-outline-primary mb-2 align-center"
            variant="dark"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="flechaMenu" />
          </div>
        </Link>
      </div>
      <Cards array={body} />
    </div>
  );
};

export default BodyPartsVocabulary;
