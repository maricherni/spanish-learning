import React from "react";

const HomeCards = ({ description, image }) => {
  return (
    <div className="col">
      <div className="card bg-white shadow-sm align-items-center">
        <div className="card-body">
          <img src={image} width="100%" height="auto" alt="" className="mx-auto" />
          <p className="card-text text-center fw-bold">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
