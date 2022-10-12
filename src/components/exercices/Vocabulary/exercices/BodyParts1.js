import React from "react";
import ChooseAndFill from "../exerciseType/ChooseAndFill";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Styles
import "../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BodyParts1 = () => {
  const { list: body } = useSelector((state) => state.body);
  const bodyPart = body.vocabulario;

  return (
    <>
      <div className="container-md mt-3 text-left fs-5">
        <Link to={"/Vocabulario"}>
          <div
            className="btn btn-outline-primary mb-2 align-center"
            variant="dark"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="flechaMenu"/>
           {"  "} Volver al menú 
          </div>
        </Link>
      </div>
      <div className="container-md mt-3 text-center fs-5">
        <div className="row mb-1">
        <h2 className="mt-4">{body.titulo}</h2>
          {/* <p className="mt-3">
            Selecciona el artículo y escribe la palabra en el recuadro. Después,
            comprueba tu respuesta.
          </p> */}
        </div>
        <ChooseAndFill array={bodyPart} address={"/Vocabulario"} />
      </div>
    </>
  );
};

export default BodyParts1;
