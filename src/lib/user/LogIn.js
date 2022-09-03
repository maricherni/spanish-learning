import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase/firebase-functions";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleLogin = async() =>{
    setError('');
    try {
      await login(email, password)
      navigate('/user')
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }
  return (
    <>
      <h1>Log In</h1>
      <div>
        <Link to="/"> Go back</Link>
      </div>
      <br />
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleLogin();
      }}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button>Log in</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
