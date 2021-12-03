import React, { useState, useEffect } from "react";
import firebaseApp from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Container, Button } from "react-bootstrap";
import AgregarTarea from "./AgregarTarea";
import ListadoTareas from "./ListadoTareas";
import "./Home.css";
import HomeAnimation from "../Animation/HomeAnimation";
import ProfileAnimation from "..//Animation/ProfileAnimation";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({ correoUsuario }) => {
  const [arrayTareas, setArrayTareas] = useState(null);
  const fakeData = [{ id: 1, descripcion: "tarea Ejemplo" }];

  async function buscarDocumentoCrearDocumento(idDocumento) {
    //referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);

    if (consulta.exists()) {
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    } else {
      await setDoc(docuRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }
  }

  useEffect(() => {
    async function traerTareas() {
      const tareasTraidas = await buscarDocumentoCrearDocumento(correoUsuario);
      setArrayTareas(tareasTraidas);
    }
    traerTareas();
  }, []);

  return (
    <div className="home">
      <div className="container d-flex justify-content-center align-items-center h-100  ">
        <div className="row ">
          <div className="col-md-10 ">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title d-flex justify-content-center">
                  DashCUN
                </h1>
                <div className="d-flex justify-content-center">
                  <div className="" style={{ maxWidth: 250 }}>
                    <ProfileAnimation />
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-danger"
                    onClick={() => signOut(auth)}
                  >
                    Salir
                  </Button>
                </div>
                <hr />
                <AgregarTarea
                  arrayTareas={arrayTareas}
                  setArrayTareas={setArrayTareas}
                  correoUsuario={correoUsuario}
                />
                {arrayTareas ? (
                  <ListadoTareas
                    arrayTareas={arrayTareas}
                    setArrayTareas={setArrayTareas}
                    correoUsuario={correoUsuario}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-10">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title d-flex justify-content-center">
                  <ProfileAnimation />
                </h1>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
