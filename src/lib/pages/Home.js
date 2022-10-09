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
                  <Link to="/Curso"><img src="/images/curso.png" alt="" className="rounded-circle"/> </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6"> <Link to="/Perfil"><img src="/images/perfil.png" alt=""className="rounded-circle"/> </Link></div>
                <div class="col-md-6"><Link to="/Comunidad"><img src="/images/comunidad.png" alt="" className="rounded-circle "/> </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Columna izquierda lg-screen */}
          <div className="col-sm-12 col-md-3 pt-4 pb-4">
            <div className="row">
              <WordOfTheDay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
