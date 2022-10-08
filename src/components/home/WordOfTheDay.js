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
      <Card border="white">
        <div className="bg-white">
          <div className="card-header border-light bg-white fw-bold p-2 text-center">PALABRA DEL DÍA</div>
          <div className="container">
            <div className="card-body text-center text-uppercase"> {palabra}</div>
            {/* Modal Button */}
            <div className="row p-3">
              <div className="col-12 text-center">
                <Button className="btn btn-outline-primary mb-2 align-center" variant="dark" onClick={() => setModalShow(true)}>
                  Ver Definición
                </Button>
              </div>
            </div>
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
