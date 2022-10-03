import React from "react";
import NavBar from '../../components/NavBar';
import WordOfTheDay from "../../components/home/WordOfTheDay";
import Curso from "./sections/Course";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
     
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="col-2">
            <div className="row text-center mb-3 mt-1">
              <WordOfTheDay/>
              {/* <img src="../images/Premium.gif" alt="" className="w-25" /> */}
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Link to='/Curso'>Curso </Link>
            </div>
            <div className="col-lg-4">
            <Link to='/Premium'><img className="rounded-circle mt-4" src="./images/Premium.gif" width= "140" height="140" alt="" /></Link>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
