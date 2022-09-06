import React from "react";
import ChooseAndFill from "../exerciseType/ChooseAndFill";
import { useSelector } from "react-redux";
import NavBar from "../../../NavBar";

const BodyParts1 = () => {
  const { list: body } = useSelector((state) => state.body);
  const bodyPart = body.vocabulario;

  return (
    <>
    <NavBar/>
    <div className="container-md mt-3 text-center fs-5">
      <div className="row mb-1">
        <h1 className="mt-4">{body.titulo}</h1>
        <p className="mt-3">
          Selecciona el artículo y escribe la palabra en el recuadro. Después,
          comprueba tu respuesta.
        </p>
      </div>
      <ChooseAndFill array={bodyPart} address={'/Vocabulario'} />
    </div>
    </>
  );
};

export default BodyParts1;
