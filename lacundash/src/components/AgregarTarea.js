import React from "react";
import { Container, Form, Col, Row, Button, Stack } from "react-bootstrap";
import firebaseApp from "../firebase";
import {
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const AgregarTarea = ({ correoUsuario, setArrayTareas, arrayTareas }) => {
  async function añadirTarea(e) {
    e.preventDefault();
    const tarea = e.target.formTarea.value;
    const horas = e.target.formHoras.value;
    const fecha = e.target.formFecha.value;
    //nuevo array de tareas
    const nuevoArrayTareas = [
      ...arrayTareas,
      { id: +new Date(), tarea: tarea, horas: horas, fecha: fecha },
    ];
    //actualizar datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nuevoArrayTareas] });
    setArrayTareas(nuevoArrayTareas); //nuevo estado
    e.target.formTarea.value = "";
    e.target.formHoras.value = "";
  }

  return (
    <Container className="fluid">
      <h4 className="d-flex justify-content-center mb-3">
        Selecciona la tarea
      </h4>
      <Form onSubmit={añadirTarea}>
        <Form.Select
          aria-label="Default select example"
          className="mb-2"
          id="formTarea"
          placeholder="Tipo Tarea"
          required
        >
          <option value="1">Tarea 1</option>
          <option value="2">Tarea 2</option>
          <option value="3">Tarea 3</option>
        </Form.Select>

        <Row className="mb-5">
          <Col className="mb-2">
            <Form.Control
              className="mt-2"
              type="number"
              placeholder="Horas"
              id="formHoras"
              required
            />
          </Col>

          <Col className="mb-3">
            <Form.Control
              className="mt-2"
              type="date"
              placeholder="Fecha"
              id="formFecha"
              required
            />
          </Col>
          <Button className="mb-2" variant="outline-success" type="submit">
            Agregar
          </Button>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default AgregarTarea;
