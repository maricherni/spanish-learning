import React, { useState } from "react";
import { useNavigate } from "react-router";
import { articulos } from "../../constants/articulos";
//Style
import Gender from "../GenderLists/GenderLists";

const ChooseAndFill = ({ array, address }) => {
  const [articulo, setArticulo] = useState("");
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [femenino, setFemenino] = useState([]);
  const [masculino, setMasculino] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const navigate = useNavigate();

  /* Función del botón "Comprobar"
      Si acierta:
      - se añade la información en un array de femenino o masculino que se mostrará por pantalla
      - avanza al siguiente item de vocabulario hasta que llega al final del array 
      - borra la respuesta del radio y del input 
      - Cuando llega al final del array de vocabulario, muestra un mensaje de "bien hecho"
      Si falla: 
      - Aparece un mensaje de "Prueba otra vez"
    */
  const handleClick = () => {
    const isAnswerCorrect =
      array[index].articulo === articulo && array[index].nombre === input;

    if (!isAnswerCorrect) return alert("Prueba otra vez");

    const addList = `${articulo} ${input}`;

    if (articulo === articulos.femenino) {
      setFemenino((femenino) => [...femenino, addList]);
    } else {
      setMasculino((masculino) => [...masculino, addList]);
    }

    setInput("");
    setArticulo(undefined);
    index < array.length - 1 ? setIndex(index + 1) : setIndex(index);
    if (index === array.length - 1) {
      alert("¡Bien hecho!");
      setEndGame(true);
    }
  };

  //Botón "Volver al Menú"
  const returnMenu = () => {
    navigate(address);
  };

  //Botón "Reiniciar"
  const restartGame = () => {
    setEndGame(false);
    setFemenino([]);
    setMasculino([]);
    setIndex(0);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        {/* Renderizado condicional: Se muestra hasta que se acabe el juego */}
        {!endGame && (
          <div className="row justify-content-center mt-4">
            <div className="col-12 justify-content-center mb-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={array[index].img}
                    className="card-img-top mx-auto mt-2 w-50"
                    alt={array[index].name}
                  />
                </div>
              </div>
              <input
                type="radio"
                name="genero"
                id="radioFemenino"
                checked={articulo === articulos.femenino}
                value={articulos.femenino}
                onChange={(e) => setArticulo(e.target.value)}
                className="mx-2"
              />
              <label htmlFor="femenino" className="me-1">
                La
              </label>
              <input
                type="radio"
                name="genero"
                id="radioMasculino"
                checked={articulo === articulos.masculino}
                value={articulos.masculino}
                onChange={(e) => setArticulo(e.target.value)}
                className="mx-2"
              />
              <label htmlFor="masculino" className="me-3">
                El
              </label>
              <input
                type="text"
                id="texto"
                autoComplete="off"
                value={input.toLowerCase()}
                onChange={(e) => setInput(e.target.value)}
                className="mt-4"
              />
              <br />

              <button onClick={handleClick} className="btn btn-success mt-4">
                Comprobar
              </button>
            </div>
          </div>
        )}
        {/* Renderizado condicional: Se muestra cuando acaba el juego */}
        {endGame && (
            <div className="row">
              <div className="d-flex justify-content-center">
            <button onClick={returnMenu} className="btn btn-success mt-4">
              Volver al menú
            </button>
            <button onClick={restartGame} className="btn btn-success mt-4 ms-2">
              Reiniciar
            </button>
            </div>
            <div className="row">
            <div className="d-flex flex-wrap justify-content-around mt-5">
              <div className="col-md-3 col-sm-12 mt-3">
                <Gender title="FEMENINO" aciertos={femenino} />
              </div>
              <div className="col-md-3 col-sm-12 mt-3">
                <Gender title="MASCULINO" aciertos={masculino} />
              </div>
            </div>
            </div>
          </div>

        )}
      </div>
      {!endGame && (
        <div className="d-flex flex-wrap justify-content-around mt-5">
          <div className="col-md-3 col-sm-12 mt-3">
            {femenino.length > 0 ? (
              <Gender title="FEMENINO" aciertos={femenino} />
            ) : (
              ""
            )}
          </div>
          <div className="col-md-3 col-sm-12 mt-3">
            {masculino.length > 0 ? (
              <Gender title="MASCULINO" aciertos={masculino} />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseAndFill;
