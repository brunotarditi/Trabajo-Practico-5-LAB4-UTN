import React, { Component } from "react";
import Rutas from "./Rutas";
import Tarjeta from "./Tarjeta";
import { instrumentos } from "../data/instrumentos.json";
class productos extends Component {
  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }
  render() {
    const instrumentos = this.state.instrumentos.map((instrumento) => {
      return (
        <Tarjeta
          key={instrumento.id}
          id={instrumento.id}
          instrumento={instrumento.instrumento}
          marca={instrumento.marca}
          modelo={instrumento.modelo}
          imagen={instrumento.imagen}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          cantidadVendida={instrumento.cantidadVendida}
          descripcion={instrumento.descripcion}
        ></Tarjeta>
      );
    });
    return (
      <>
        <Rutas></Rutas>
        {instrumentos}
        
      </>
    );
  }
}

export default productos;
