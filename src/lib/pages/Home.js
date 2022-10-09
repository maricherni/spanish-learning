import React from "react";
import WordOfTheDay from "../../components/home/WordOfTheDay";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-row-reverse">
          {/* Columna derecha lg-screen */}
          <div className="col-sm-12 col-md-9">
            <div className="container justify-content-center text-center">
              <div className="row">
                <div className="col-md-12">
                  <Link to="/Curso"><img src="/images/curso.png" alt="" className="rounded-circle bg-light"/> </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6"> <Link to="/Perfil"><img src="/images/perfil.png" alt=""className="rounded-circle bg-light"/> </Link></div>
                <div class="col-md-6"><Link to="/Comunidad"><img src="/images/comunidad.png" alt="" className="rounded-circle bg-light"/> </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Columna izquierda lg-screen */}
          <div className="col-sm-12 col-md-3 bg-light border pt-4 pb-4 rounded">
            <div className="row">
              <WordOfTheDay />
            </div>
            <div className="row text-center">
              <Link to="/Premium">
                <img
                  className="rounded-circle mt-5"
                  src="./images/Premium.gif"
                  width="150"
                  height="150"
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
