import React, { useState, useEffect, useRef } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";
import firebaseApp from "../firebase";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import "./Login.css";
import LoginAnimation from "../Animation/LoginAnimation";
import lottie from "lottie-web";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [estaRegistrandose, setEstaRegistradose] = useState(false);

  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="container d-flex justify-content-center align-items-center">
          <LoginAnimation />
        </div>
        <h4 className="card-title d-flex justify-content-center"></h4>
        <hr />
        <div className="d-flex justify-content-center">
          <Button
            className=""
            variant="success"
            type="submit"
            onClick={() => signInWithRedirect(auth, googleProvider)}
          >
            Acceder con Google
          </Button>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Login;
