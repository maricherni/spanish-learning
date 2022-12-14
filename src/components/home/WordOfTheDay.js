import React, { useState, useEffect } from "react";
import axios from "axios";
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

  function createMarkup() {
    return {__html: `${definicion}`};
  }
  
  function Mydefinition() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
  
  return (
        <div className="wordOfDay p-5">
          <div className="card-header fw-bold p-2 mb-3 text-center">PALABRA DEL DÍA</div>
          <div className="container">
            <div className="card-body text-center text-uppercase"> {palabra}</div>
            {/* Modal Button */}
            <div className="row p-3">
              <div className="col-12 text-center">
                <div className="btn btn-outline-primary mt-3 align-center" variant="dark" onClick={() => setModalShow(true)}>
                  Ver Definición 
                </div>
              </div>
            </div>
          </div>
          <ModalDefinicion
            palabra={palabra.toUpperCase()}
            definicion={definicion ?  Mydefinition() : 'Definición no disponible'}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
  );
};

export default WordOfTheDay;
