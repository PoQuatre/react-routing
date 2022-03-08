import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";

export class App extends Component {
  render() {
    return (
      <>
        <h1>React Routing Exercise</h1>

        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </>
    );
  }
}
