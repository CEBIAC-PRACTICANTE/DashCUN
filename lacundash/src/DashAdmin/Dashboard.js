import React, { useState } from "react";
import "./dashboard.css";
import classnames from "classnames";
import Header from "./Header";
import Chart1 from "../Charts/Chart1";
import AdminNvavbar from "./AdminNavbar";
import Select from "react-select";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

let objDocentes = {};
let opcsSelect = [];
let arrDocentes = [];
let arrFiltrado = [];
let idSelect = []; //Lista de docentes seleccionados

const selectChange = (e) => {
  let seleccionados = e
  idSelect = []
  console.log(seleccionados)
  seleccionados.forEach(key => {
    idSelect.push(key['value'])
  });
  console.log(idSelect)
}

const getDatosDocentes = async () => {
  const datos = await getDocs(collection(db, "docentes"));
  datos.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    objDocentes[doc.id] = doc.data();
    arrDocentes.push({
      name: objDocentes[doc.id]["nombre"],
      horas: objDocentes[doc.id]["totalHoras"],
    });
    opcsSelect.push({
      value: objDocentes[doc.id]["nombre"],
      label: objDocentes[doc.id]["nombre"],
    });
  });
};
getDatosDocentes();

const Dashboard = () => {
  const [docentes, setdocentes] = useState(arrDocentes);

  const comparacion = () => {
    arrFiltrado = arrDocentes.filter((docente) =>
      idSelect.includes(docente.name)
    );
    console.log(arrFiltrado, arrDocentes);
    setdocentes([...arrFiltrado]);
    console.log(docentes);
  };

  const data01 = [
    { name: "Profe 1", tareas: 4 },
    { name: "Profe 2", tareas: 3 },
    { name: "Profe 3", tareas: 30 },
    { name: "Profe 4", tareas: 20 },
    { name: "Profe 5", tareas: 2 },
    { name: "Profe 6", tareas: 18 },
  ];
  return (
    <>
      <Header />

      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Seleecionar Docentes
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Select
                  options={opcsSelect}
                  isMulti
                  onChange={selectChange}
                />
                <div className="col">
                  <button
                    className="d-none text-default d-md-block"
                    onClick={comparacion}
                  >
                    Comparar
                  </button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-white shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Horas
                    </h6>
                    <h2 className=" mb-0">Grafico 1</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink className={classnames("py-2 px-3")}>
                          <span className="d-none text-default d-md-block">
                            Mensual
                          </span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart align-items-center">
                  <BarChart
                    width={600}
                    height={350}
                    data={docentes}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 5,
                    }}
                    barSize={20}
                  >
                    <XAxis
                      dataKey="name"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                      dataKey="horas"
                      fill="#8bc43f"
                      background={{ fill: "#eee" }}
                    />
                  </BarChart>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Tareas
                    </h6>
                    <h2 className="mb-0">Grafico 2</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <PieChart width={450} height={300}>
                    <Pie
                      dataKey="tareas"
                      isAnimationActive={false}
                      data={data01}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8bc43f"
                      label
                    />

                    <Tooltip />
                  </PieChart>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Profesores</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      className="bg-blue text-white"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Descargar
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Correo</th>
                    <th scope="col">Horas</th>
                    <th scope="col">Tareas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Profesor 1</th>
                    <td>50</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <th scope="row">Profesor 2</th>
                    <td>30</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <th scope="row">Profesor 3</th>
                    <td>20</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <th scope="row">Profesor 4</th>
                    <td>50</td>
                    <td>19</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
