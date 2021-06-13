import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
class rutas extends Component {

  state = {
    valor: ""
  };

  render() {
    const buscarInstrumento = () => {
      console.log(this.state.valor);
      window.location.href = "busqueda/" + this.state.valor;
    };
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dondeEstamos">Donde estamos</Nav.Link>
              <Nav.Link href="/productos">Productos</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Buscar"
                className="mr-sm-2"
                onChange={e => this.setState({ valor: e.target.value })}
                value={this.state.valor}
              />
              <Button variant="outline-info" onClick={buscarInstrumento}>
                Buscar
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default rutas;
