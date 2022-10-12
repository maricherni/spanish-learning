import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../../components/theory/Vocabulary/Cards";
const BodyPartsVocabulary = () => {
  const { list: body } = useSelector((state) => state.body);

  return (
    <div>
      <Cards array={body} />
    </div>
  );
};

export default BodyPartsVocabulary;
