import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

import firebaseApp from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./components/Login.css";

const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuarioGlobal(usuarioFirebase);
    } else {
      setUsuarioGlobal();
    }
  });

  return (
    <>
      {" "}
      {usuarioGlobal ? (
        <Home correoUsuario={usuarioGlobal.email} />
      ) : (
        <div className="App">
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
              <div className="col-md-auto">
                <Login />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
