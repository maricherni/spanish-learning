import React from "react";
import WordOfTheDay from "../../components/home/WordOfTheDay";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Columna derecha lg-screen */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-row-reverse">
          <div className="col-sm-12 col-md-9">
          <div className="row">
            <Link to="/Curso">Curso </Link>
          </div>            
          </div>
          {/* Columna izquierda lg-screen */}
          <div className="col-sm-12 col-md-3 bg-light pt-4 pb-4 rounded">
            <div className="row">
              <WordOfTheDay />
            </div>
            <div className="row text-center">
              <Link to="/Premium">
                <img
                  className="rounded-circle mt-5"
                  src="./images/Premium.gif"
                  width="200"
                  height="200"
                  alt="Premium"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
