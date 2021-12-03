import React from "react";
import {
  Container,
  Stack,
  Row,
  Col,
  Button,
  MDBContainer,
  ListGroup,
} from "react-bootstrap";
import firebaseApp from "../firebase";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import ReactDOM from "react-dom";
import { FixedSizeList as List } from "react-window";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";

const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({ arrayTareas, correoUsuario, setArrayTareas }) => {
  async function eliminarTarea(idTareaElimanada) {
    //Crea el array de las tareas
    const nuevoArrayTareas = arrayTareas.filter(
      (objetoTarea) => objetoTarea.id !== idTareaElimanada
    );
    //Actualiza la base de datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nuevoArrayTareas] });

    //Actualiza el estado
    setArrayTareas(nuevoArrayTareas);
  }
  return (
    <Container>
      <Stack>
        {arrayTareas.map((objetoTarea) => {
          return (
            <>
              <Row>
                <Col>{objetoTarea.tarea} </Col>
                <Col>{objetoTarea.horas} </Col>
                <Col>{objetoTarea.fecha}</Col>
                <Col>
                  <Button
                    className="flex-end"
                    variant="danger"
                    onClick={() => eliminarTarea(objetoTarea.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </Button>
                </Col>
              </Row>
            </>
          );
        })}
      </Stack>
    </Container>
  );
};

export default ListadoTareas;
