import React from "react";

const CourseCards = ({ description, image }) => {
  return (
    <div className="col">
      <div className="card bg-white shadow-sm align-items-center">
        <div className="card-body">
          <img src={image} width="100%" height="auto" alt="" className="mx-auto" />          
        </div>
      </div>
    </div>
  );
};

export default CourseCards;