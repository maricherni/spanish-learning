import React from "react";

const HomeCards = ({ description }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" />
        <div className="card-body">
          <p className="card-text text-center fw-bold">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
