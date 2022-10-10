import React from "react";

const CourseCards = ({ image }) => {
  return (
    <div className="col">
      <div className="card shadow-sm align-items-center">
        <div className="card-body homepageLinks">
          <img src={image} width="100%" height="auto" alt="" className="mx-auto" />          
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
