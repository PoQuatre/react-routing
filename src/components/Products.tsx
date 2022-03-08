import { Component } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface State {
  products: Product[];
  controller: AbortController;
}

export class Products extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      products: [],
      controller: new AbortController(),
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/", {
      signal: this.state.controller.signal,
    })
      .then((res) => res.json())
      .then((products: Product[]) => this.setState({ products }));
  }

  componentWillUnmount() {
    this.state.controller.abort();
  }

  render() {
    return <h1>Products</h1>;
  }
}
