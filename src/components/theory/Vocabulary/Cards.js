import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { articulos } from "../../../constants/articulos";

const Cards = ({ array }) => {
  const [index, setIndex] = useState(0);
  const lastCard = index === array.vocabulario.length - 1;
  const firstCard = index === 0;
  const vocabulario = array.vocabulario[index];

  const handleClick = (e) => {
    if (e.target.id === "siguiente" && !lastCard) {
      setIndex(index + 1);
    } else if (e.target.id === "anterior" && !firstCard) {
      setIndex(index - 1);
    } else {
      setIndex(index);
    }
  };

  return (
    <div className="container-md mt-3 text-center fs-5">
      <div className="row mb-1">
        <h1 className="mt-4">{array.titulo}</h1>
        <p className="mt-3">Cada tarjeta muestra una imagen y su nombre.</p>
        <p> Haz clic en Anterior o Siguiente para retroceder o avanzar. </p>
      </div>
      <div className="container-md mt-4 text-center">
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
            <Card
              border={
                vocabulario.articulo === articulos.femenino
                  ? "danger"
                  : "primary"
              }
              text="dark"
              height="5rem"
              style={{ width: "18rem"}}
            >
              <div className="card">
                <div className="card-body">
                  <img
                    src={vocabulario.img}
                    className="card-img-top mx-auto mt-2 w-50"
                    alt={vocabulario.nombre}
                  />
                </div>
                <div className="card-title fw-bold">
                  {`${vocabulario.articulo.toUpperCase()} ${vocabulario.nombre.toUpperCase()}`}
                </div>
              </div>
            </Card>
            {/* Renderizado condicional: solo se muestra desde el segundo item del array */}
            {!firstCard && (
              <button
                id="anterior"
                onClick={(e) => handleClick(e)}
                className="btn btn-success mt-4 me-4"
              >
                ANTERIOR
              </button>
            )}
            {/* Renderizado condicional: solo se muestra hasta el penúltimo item del array */}
            {!lastCard && (
              <button
                id="siguiente"
                onClick={handleClick}
                className="btn btn-success mt-4"
              >
                SIGUIENTE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
