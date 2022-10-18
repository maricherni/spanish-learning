import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { articulos } from "../../constants/articulos";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="row mb-5">
        <h2 className="mt-4">{array.titulo}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row ">
          <div className="col-md-6 col-sm-12 justify-content-center mb-2">
            <Card
              border={
                vocabulario.articulo === articulos.femenino
                  ? "danger"
                  : "primary"
              }
              text={
                vocabulario.articulo === articulos.femenino
                  ? "danger"
                  : "primary"
              }
              height="5rem"
              style={{ width: "18rem" }}
            >
              <div className="card">
                <div className="card-body">
                  <img
                    src={vocabulario.img}
                    className="card-img-top mx-auto mt-2"
                    alt={vocabulario.nombre}
                  />
                </div>
                <div className="card-title fw-bold">
                  {`${vocabulario.articulo.toUpperCase()} ${vocabulario.nombre.toUpperCase()}`}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="d-flex-lg text-center justify-content-center">
              {/* Renderizado condicional: solo se muestra desde el segundo item del array */}
              {!firstCard && (
                <button
                  id="anterior"
                  onClick={(e) => handleClick(e)}
                  className="btn btn-outline-primary mt-4 me-4"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="flechaMenu" />
                  {"  "} Anterior
                </button>
              )}
              {/* Renderizado condicional: solo se muestra hasta el penúltimo item del array */}
              {!lastCard && (
                <button
                  id="siguiente"
                  onClick={handleClick}
                  className="btn btn-outline-primary mt-4  "
                >
                  Siguiente {"  "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="flechaMenu "
                  />
                </button>
                )}
              {lastCard && (
                <Link to={"/Vocabulario"}> 
                <button
                  id="volver"
                  onClick={handleClick}
                  className="btn btn-danger mt-4  "
                >
                  Volver al menú
                  
                </button>
                </Link>
              )}
            </div>
    </div>
  );
};

export default Cards;
