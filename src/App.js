import "./assets/css/App.css";
import { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Productos from "./components/Productos";
import DondeEstamos from "./components/DondeEstamos";
import DetalleProducto from "./components/DetalleProducto";
import busqueda from "./components/busqueda";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/dondeEstamos" component={DondeEstamos}></Route>
        <Route path="/productos" component={Productos}></Route>
        <Route path="/detalleProducto/:id" component={DetalleProducto}></Route>
        <Route path="/busqueda/:instrumento" component={busqueda}></Route>
      </Switch>
    );
  }
}
export default App;
