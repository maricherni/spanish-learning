import React from "react";
import ChooseAndFill from "../ExerciseTypeChooseAndFill/ExerciseTypeChooseAndFill";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BodyParts1 = () => {
  const { list: body } = useSelector((state) => state.body);
  const bodyPart = body.vocabulario;

  return (
    <>
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
      <div className="container-md mt-3 text-left fs-5"></div>
      <div className="container-md mt-3 text-center fs-5">
        <div className="row mb-1">
          <h2 className="mt-4">{body.titulo}</h2>
        </div>
        <ChooseAndFill array={bodyPart} address={"/Vocabulario"} />
      </div>
    </>
  );
};

export default BodyParts1;
