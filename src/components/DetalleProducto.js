import React, { Component } from "react";
import Rutas from "./Rutas";
import { instrumentos } from "../data/instrumentos.json";
import { Container, Row, Col, Button } from "react-bootstrap";
class detalleProducto extends Component {
  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }
  render() {
    const parametroId = this.props.match.params.id;
    const instrumentoEncontrado = instrumentos.filter(
      (instrumento) => instrumento.id === parametroId
    );
    if (instrumentoEncontrado[0].costoEnvio === "G") {
      this.costo = (
        <span className="gratis">
          <img
            src={require(`../assets/img/camion.png`).default}
            alt="envio gratis"
          ></img>
          Envío gratis
        </span>
      );
    } else {
      this.costo = (
        <span className="costoEnvio">
          Costo de envío al interior de Argentina: $
          {instrumentoEncontrado[0].costoEnvio}
        </span>
      );
    }
    return (
      <>
        <Rutas></Rutas>
        <Container className="mt-4">
          <Row >
            <Col>
              <img
                className="d-block mx-auto sizeImg"
                src={
                  require(`../assets/img/${instrumentoEncontrado[0].imagen}`)
                    .default
                }
                alt="imagen-producto"
              ></img>
              <p className="title">Descripción: </p>
              <p className="descripcion">{instrumentoEncontrado[0].descripcion}</p>
            </Col>
            <Col lg="0">
              <div className="verticalLine d-none d-lg-block"></div>
            </Col>
            <Col lg="4">
              <Row>
                <Col >
                  <span>
                    {instrumentoEncontrado[0].cantidadVendida} vendidos
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="instrumento">{instrumentoEncontrado[0].instrumento}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="precio">$ {instrumentoEncontrado[0].precio}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="title">Marca: {instrumentoEncontrado[0].marca}</span>
                  <br />
                  <span className="title">Modelo: {instrumentoEncontrado[0].modelo}</span>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <span>Costo de envío: </span><br />
                  <span>{this.costo}</span>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col>
                  <Button size="sm" href="/productos" variant="outline-info">
                    Agregar al carrito
                  </Button>{" "}
                </Col>
              </Row>
            </Col>
            <Col lg="1">
              <div className="verticalLine d-none d-md-block"></div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default detalleProducto;
