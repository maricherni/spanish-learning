import React, { useState } from "react";
import { useNavigate } from "react-router";
import { articulos } from "../../../../constants/articulos";
//Style
import Gender from "../GenderLists";

const ChooseAndFill = ({ array, address }) => {
  const [articulo, setArticulo] = useState("");
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [femenino, setFemenino] = useState([]);
  const [masculino, setMasculino] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const navigate = useNavigate();

  // gestión de Radio Buttons
  const handleChange = (e) => {
    if (e.target.value === array[index].articulo) {
      setArticulo(e.target.value);
    }
  };

  /* Función del botón "Comprobar"
      Si acierta:
      - se añade la información en un array de femenino o masculino que se mostrará por pantalla
      - avanza al siguiente item de vocabulario hasta que llega al final del array y borra el texto del input
      - Cuando llega al final del array de vocabulario, muestra un mensaje de "bien hecho"
      Si falla: 
      - Aparece un mensaje de "Prueba otra vez"
    */
  const handleClick = () => {
    if (articulo === articulos.femenino && input === array[index].nombre) {
      const addList = `${articulo} ${input}`;
      setFemenino((femenino) => [...femenino, addList]);
      setInput("");
      index < array.length - 1 ? setIndex(index + 1) : setIndex(index);
      if (index === array.length - 1) {
        alert("¡Bien hecho!");
        setEndGame(true);
      }
    } else if (
      articulo === articulos.masculino &&
      input === array[index].nombre
    ) {
      const addList = `${articulo} ${input}`;
      setMasculino((masculino) => [...masculino, addList]);
      setInput("");
      index < array.length - 1 ? setIndex(index + 1) : setIndex(index);
      if (index === array.length - 1) {
        alert("¡Bien hecho!");
        setEndGame(true);
      }
    } else {
      alert("Prueba otra vez");
    }
    console.log("array", array[index].articulo, "articulo", articulo)
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
              value={articulos.femenino}
              onChange={(e) => handleChange(e)}
              className="mx-2"
            />
            <label htmlFor="femenino" className="me-1">
              La
            </label>
            <input
              type="radio"
              name="genero"
              id="radioMasculino"
              value={articulos.masculino}
              onChange={(e) => handleChange(e)}
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
        <div>
          <button onClick={returnMenu} className="btn btn-success mt-4 ms-4">
            Volver al menú
          </button>
          <button onClick={restartGame} className="btn btn-success mt-4 ms-4">
            Reiniciar
          </button>
          <div className="container-md mt-5">
            <div className="row">
              <div className="col-2" />
              <div className="col-2">
                <Gender title="FEMENINO" aciertos={femenino} />
              </div>
              <div className="col-3" />
              <div className="col-2">
                <Gender title="MASCULINO" aciertos={masculino} />
              </div>
              <div className="col-2" />
            </div>
          </div>
        </div>
      )}
    </div>
      <div className="container">

    {!endGame && (
        <div className="col-3">
          {femenino.length > 0 ? (
            <Gender title="FEMENINO" aciertos={femenino} />
          ) : (
            ""
          )}
        </div>
        
    )}
      </div>
</div>
  );
};

export default ChooseAndFill;

//   const handleClick = () => {
//     if (articulo === articulos.femenino && input === array[index].nombre) {
//       const addList = `${articulo} ${input}`;
//       setFemenino((femenino) => [...femenino, addList]);
//       setInput("");
//       index < array.length - 1 ? setIndex(index + 1) : setIndex(index);
//       if (index === array.length - 1) {
//         alert("¡Bien hecho!");
//         setEndGame(true);
//       }
//     } else if (articulo === articulos.masculino && input === array[index].nombre) {
//       const addList = `${articulo} ${input}`;
//       setMasculino((masculino) => [...masculino, addList]);
//       setInput("");
//       index < array.length - 1 ? setIndex(index + 1) : setIndex(index);
//       if (index === array.length - 1) {
//         alert("¡Bien hecho!");
//         setEndGame(true);
//       }
//     } else {
//       alert("Prueba otra vez");
//     }
//   };

//   //Botón "Volver al Menú"
//   const returnMenu = () => {
//    navigate(address);
//   };

//   //Botón "Reiniciar"
//   const restartGame = () => {
//     setEndGame(false);
//     setFemenino([]);
//     setMasculino([]);
//     setIndex(0);
//   };

//   return (
//     <div className="container-md mt-4 text-center">
//       {/* Renderizado condicional: Se muestra hasta que se acabe el juego */}
//       {!endGame && (
//         <div className="row">
//           <div className="col-3">
//             {femenino.length > 0 ? (
//               <Gender title="FEMENINO" aciertos={femenino} />
//             ) : (
//               ""
//             )}
//           </div>
//           <div className="col-1" />
//           <div className="col-4 h-100">
//             <div className="card">
//               <div className="card-body">
//                 <img
//                   src={array[index].img}
//                   className="card-img-top mx-auto mt-2 w-50"
//                   alt={array[index].name}
//                 />
//               </div>
//             </div>
//             <input
//               type="radio"
//               name="genero"
//               id="radioFemenino"
//               value={articulos.femenino}
//               onChange={(e) => handleChange(e)}
//               className="mx-2"
//             />
//             <label htmlFor="femenino" className="me-1">
//               La
//             </label>
//             <input
//               type="radio"
//               name="genero"
//               id="radioMasculino"
//               value= {articulos.masculino}
//               onChange={(e) => handleChange(e)}
//               className="mx-2"
//             />
//             <label htmlFor="masculino" className="me-3">
//               El
//             </label>
//             <input
//               type="text"
//               id="texto"
//               autoComplete="off"
//               value={input.toLowerCase()}
//               onChange={(e) => setInput(e.target.value)}
//               className="mt-4"
//             />
//             <br />

//             <button onClick={handleClick} className="btn btn-success mt-4">
//               Comprobar
//             </button>
//           </div>
//           <div className="col-1" />
//           <div className="col-3">
//             {masculino.length > 0 ? (
//               <Gender title="MASCULINO" aciertos={masculino} />
//             ) : (
//               ""
//             )}
//           </div>
//         </div>
//       )}
//        {/* Renderizado condicional: Se muestra cuando acaba el juego */}
//       {endGame && (
//         <div>
//           <button onClick={returnMenu} className="btn btn-success mt-4 ms-4">
//             Volver al menú
//           </button>
//           <button onClick={restartGame} className="btn btn-success mt-4 ms-4">
//             Reiniciar
//           </button>
//           <div className="container-md mt-5">
//             <div className="row">
//             <div className="col-2"/>
//               <div className="col-2">
//                 <Gender title="FEMENINO" aciertos={femenino} />
//               </div>
//               <div className="col-3"/>
//               <div className="col-2">
//                 <Gender title="MASCULINO" aciertos={masculino} />
//               </div>
//               <div className="col-2"/>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChooseAndFill;
