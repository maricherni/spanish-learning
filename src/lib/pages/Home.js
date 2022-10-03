import React from "react";
import WordOfTheDay from "../../components/home/WordOfTheDay";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-row">
          <div className="col-sm-12 col-md-4">
            <div className="row">
              <WordOfTheDay />
            </div>
            <div className="row">
              <Link to="/Premium">
                <img
                  className="rounded-circle mt-5 mx-5"
                  src="./images/Premium.gif"
                  width="230"
                  height="230"
                  alt="Premium"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
          <div className="row">
            <Link to="/Curso">Curso </Link>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
