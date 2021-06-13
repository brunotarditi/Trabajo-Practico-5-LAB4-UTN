import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class tarjeta extends Component {
  render() {
    if (this.props.costoEnvio === "G") {
      this.costo = (
        <span className="gratis">
          <img
            src={require(`../assets/img/camion.png`).default}
            alt="envio gratis"
          ></img>
          Envío gratis a todo el País
        </span>
      );
    } else {
      this.costo = (
        <span className="costoEnvio">
          Costo de envío al interior de Argentina: ${this.props.costoEnvio}
        </span>
      );
    }
    return (
      <>
        <Container className="d-flex justify-content-center mt-4">
            <Card style={{ width: "50rem" }}>
              <Row>
                <Col className="d-flex justify-content-center">
                  <a href={`detalleProducto/${this.props.id}`}>
                    <Card.Img
                      className="maxImg"
                      src={
                        require(`../assets/img/${this.props.imagen}`).default
                      }
                    />
                  </a>
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{this.props.instrumento}</Card.Title>
                    <Card.Subtitle>${this.props.precio}</Card.Subtitle>
                    <Card.Text>{this.costo}</Card.Text>
                    <Card.Text>{this.props.cantidadVendida} vendidos</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
        </Container>
      </>
    );
  }
}

export default tarjeta;
