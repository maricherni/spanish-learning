import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../../components/theory/Vocabulary/Cards";
import { Link } from "react-router-dom";
const BodyPartsVocabulary = () => {
  const { list: body } = useSelector((state) => state.body);

  return (
    <div>
      <Cards array={body} />
      <Link to= '/Vocabulario/Ejercicios/PartesDelCuerpo'>Ir a los ejercicios (privado)</Link>
    </div>
  );
};

export default BodyPartsVocabulary;
