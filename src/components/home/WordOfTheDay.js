import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { ModalDefinicion } from "../Modal";

const WordOfTheDay = () => {
  const [palabra, setPalabra] = useState("");
  const [definicion, setDefinicion] = useState("");
  const [modalShow, setModalShow] = useState(false);

  //Llamada a la API de palabras aleatorias
  useEffect(() => {
    const obtenerPalabra = async () => {
      const url = `https://palabras-aleatorias-public-api.herokuapp.com/word-of-the-day`;
      const result = await axios.get(url);
      console.log(result.data.body.Word);
      setPalabra(result.data.body.Word);
      setDefinicion(result.data.body.DefinitionMD);
    };
    obtenerPalabra();
  }, [palabra]);
  return (
    <div>
      <Card>
        <div className="card bg-light">
          <div className="card-title fw-bold mb-1">PALABRA DEL DÍA</div>
          <div className="container">
            <div className="card-body"> {palabra.toUpperCase()}</div>
            {/* Modal Button */}
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Ver Definición
            </Button>
          </div>
          <ModalDefinicion
            palabra={palabra.toUpperCase()}
            definicion={definicion ? definicion : 'Definición no disponible'}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Card>
    </div>
  );
};

export default WordOfTheDay;
