import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../../components/theory/Vocabulary/Cards";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";

const BodyPartsVocabulary = () => {
  const { list: body } = useSelector((state) => state.body);

  return (
    <div>
      <NavBar/>
      <Cards array={body} />
      <Link to= '/Vocabulario/Ejercicios/PartesDelCuerpo'>Ir a los ejercicios (privado)</Link>
    </div>
  );
};

export default BodyPartsVocabulary;
