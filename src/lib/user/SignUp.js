import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../firebase/firebase-functions";
//Styles
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    try {
      await signup(email, password);
      navigate("/Vocabulario");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <>
      <Link to={"/Login"}>
        <div
          className="btn btn-outline-primary mb-2 align-center ms-4"
          variant="dark"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="flechaMenu" />
        </div>
      </Link>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <div className="row text-center mb-4">
              <h2>REGISTRO</h2>
              <br />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="container ">
                <div className="row justify-content-center">
                  <div className="col-4">
                    <label>Correo electrónico </label>
                  </div>
                  <div className="col-5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-100"></div>
                  <div className="col-4">
                    <label>Contraseña </label>
                  </div>
                  <div className="col-5">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <br />

              <br />
              <div className="text-center">
                <button className="button" onClick={()=> handleSignUp()}> Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {error && <p>{error}</p>}
    </>
  );
};

export default SignUp;
