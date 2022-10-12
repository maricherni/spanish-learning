import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase/firebase-functions";
//Styles
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <>
      
        <Link to={"/"}>
          <div
            className="btn btn-outline-primary mb-2 align-center ms-4"
            variant="dark"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="flechaMenu" />
          </div>
        </Link>
        <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-12">
            <div className="row text-center mb-4">
          <h2>Acceso</h2>
          <br />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="d-flex">
              <div className="row">
                <div className="col-6">
                  <label>Correo electrónico </label>
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <br />
            <div>
            <div className="d-flex">
              <div className="row">
                <div className="col-6"> 
              <label>Contraseña </label>
              </div>
              <div className="col-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              </div>
              </div>
            </div>
            <br />
            <div className="text-center">
              <Button onClick={()=>login()}>Log in</Button>
            </div>
            <div>
            <br />

              {" "}
              ¿No tienes cuenta? <Link to="/Signup"> Regístrate</Link> para
              acceder a material exclusivo.
            </div>
          </form>
        </div>
        </div>
      </div>

      {error && <p>{error}</p>}
    </>
  );
}
