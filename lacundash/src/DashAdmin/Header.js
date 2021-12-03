import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { BsFillPeopleFill, BsClockFill, BsPieChartFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header bg-blue pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Profesores
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">15</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-blue text-white rounded-circle shadow">
                          <h3 className="text-green mt-1">
                            <BsFillPeopleFill />
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Horas
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">130</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-blue text-white rounded-circle shadow">
                          <h3 className="text-green mt-2">
                            <BsClockFill />
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Tareas
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">70</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-blue text-white rounded-circle shadow">
                          <h3 className="text-green mt-2">
                            <BsPieChartFill />
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
