import React from "react";
import Card from "react-bootstrap/Card";

//Listados de aciertos situados a los laterales distribuidos entre Femenino y Masculino
const Gender = ({ title, aciertos }) => {
  return (
    <div>
      <Card
        border={title === "FEMENINO" ? "danger" : "primary"}
        text="dark"
        style={{ width: "18rem" }}
      >
        <Card.Header
          className={
            title === "FEMENINO"
              ? "border-danger fw-bold  fs-5"
              : "border-primary fw-bold fs-5"
          }
        >
          {" "}
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {" "}
            {aciertos.map((acierto) => (
              <span className="d-block" key={acierto}>{acierto}</span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Gender;
