import React, { Component } from "react";
import Rutas from "./Rutas";
import Tarjeta from "./Tarjeta";
import { instrumentos } from "../data/instrumentos.json";
class busqueda extends Component {
  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }
  render() {
    const busquedaInstrumento = this.props.match.params.instrumento;
    console.log(busquedaInstrumento);
    const instrumentoEncontrado = this.state.instrumentos.filter(
      (instrumento) =>
        instrumento.marca.toLowerCase().indexOf(busquedaInstrumento.toLowerCase()) > -1 ||
        instrumento.modelo.toLowerCase().indexOf(busquedaInstrumento.toLowerCase()) > -1 ||
        instrumento.instrumento.toLowerCase().indexOf(busquedaInstrumento.toLowerCase()) > -1      
    ).map(instrumento => {
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
    console.log(instrumentoEncontrado);
    return (
      <>
        <Rutas></Rutas>
        {instrumentoEncontrado}
      </>
    );
  }
}

export default busqueda;
