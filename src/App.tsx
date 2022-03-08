import { Component } from "react";
import { Home } from "./components/Home";
import { Products } from "./components/Products";

export class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Products />
      </>
    );
  }
}
