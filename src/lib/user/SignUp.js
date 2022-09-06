import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../firebase/firebase-functions";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError('');
    try {
      await signup(email, password)
      navigate('/Vocabulario')
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <>
      <h1>Sign up</h1>
      <div>
        <Link to="/"> Go back</Link>
      </div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
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
          <button>Sign up</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default SignUp;
