import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const LogIn = () => {
   async function handleOnClick() {
     const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {}
    console.error();
  }
  return (
    <div>
      <button onClick={handleOnClick}>Login with Google</button>
    </div>
  );
};
/* import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


  
    export default function LogIn = () => {
        //Datos usuario
        const [logIn, setLogIn] = useState([]);
        //Autentificación usuario. Se almacena en sessionStorage para que al acabar la sesión se desconecte
        const[isAutheticated, setIsAutheticated] = useState(JSON.parse(sessionStorage.getItem('logged')) || false);
        const navigate = useNavigate();

        useEffect(()=>{
            try{
             setLogIn(logIn)
             localStorage.setItem('logIn', JSON.stringify(logIn))
            } catch (error){
                console.error(error)
            }
        },[logIn])
    
       
        const handleSubmit = () => {
            const email = logIn.email;
            const password = logIn.password;
            const userList = JSON.parse(localStorage.getItem('list'));
            let checkUser = []; // Para que no de error el find en caso de que no haya una lista creada
            let checkPassword = [];          
            checkUser = userList.filter(user=> user.email === email);
            checkPassword = checkUser.find(user => user.password === password);
            
            if (checkUser && !checkPassword) {
                alert('Contraseña errónea')
                setIsAutheticated(false);
                sessionStorage.setItem('logged', JSON.stringify(isAutheticated));
            }else if (checkUser && checkPassword) {
                setIsAutheticated(true);
                sessionStorage.setItem('logged', JSON.stringify(true));
                console.log("loggedInUser:" + isAutheticated)
                navigate('/lista_naves/')
            }else{
                alert('Usuario no registrado. \nRedirigiendo a la página de registro')
                setIsAutheticated(false);
                sessionStorage.setItem('logged', JSON.stringify(isAutheticated));
                console.log("loggedInUser:" + isAutheticated)
                navigate('/SignUp')
            }
            setLogIn([]);
        }
        
        return(
        <div>
            <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label>Email:</label>
                            <div>
                                <input 
                                    type="email"
                                    name="email"
                                    required = {true}
                                    value={logIn.email}
                                    onChange={(e)=> setLogIn({...logIn, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </li>
                        <li>
                            <label>Contraseña:</label>
                            <div>
                                <input 
                                   type="password"
                                   name="password"
                                   value={logIn.password}
                                   minLength='5'
                                   required = {true}
                                   onChange={(e)=> setLogIn({...logIn, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </li>
                    </ul>
                       
                </form>
        </div>
        )
    }
 */

export default LogIn;
