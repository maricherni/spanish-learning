import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../../components/theory/Vocabulary/Cards";

const Grammar = () => {
  const { list: body } = useSelector((state) => state.body);

  return (
    <div>
      <div
        style={{
          color: "red",
          fontWeight: "bold",
          margin: "15px",
          fontSize: "2rem",
        }}
      >
        PRÓXIMAMENTE
      </div>
      <Cards array={body} />
    </div>
  );
};

export default Grammar;
