import React from "react";
import { Link } from "react-router-dom";

const MenuCourseCards = ({ link, section, exercises, image }) => {
  return (
    <div className="col">
      <div className="card bg-white shadow-sm align-items-center">
        <div className="card-body">
          <img
            src={image}
            width="100%"
            height="auto"
            alt=""
            className="mx-auto"
          />
          <div className="row">
            <div className="col-6">
              <Link className="enlaces" to={`/${section}/${link}`}>
                <p className="card-text text-center fw-bold">{section}</p>
              </Link>
            </div>
            <div className="col-6">
              <Link className="enlaces" to={`/${section}/Ejercicios/${link}`}>
                <p className="card-text text-center fw-bold">{exercises}</p>
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuCourseCards;
