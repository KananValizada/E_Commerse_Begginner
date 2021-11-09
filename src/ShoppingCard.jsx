import { Component } from "react";
import Product from "./Product";

export default class ShoppingCard extends Component {
  state = {
    products: [
      { id: 1, productName: "IPhone", price: 500, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 300, quantity: 0 },
      { id: 3, productName: "Playstation 2", price: 700, quantity: 0 },
      { id: 4, productName: "Xiomi", price: 650, quantity: 0 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h1>Shopping Card</h1>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                quantity={product.quantity}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            );
          })}
        </div>
      </div>
    );
  }

  handleIncrement = (id, maxValue) => {
    let productClone = [...this.state.products];
    let index = productClone.findIndex((pr) => {
      return pr.id === id;
    });
    if (productClone[index].quantity < maxValue) {
      productClone[index].quantity++;
      this.setState({ products: productClone });
    }
  };
  handleDecrement = (id, minValue) => {
    let productClone = [...this.state.products];
    let index = productClone.findIndex((pr) => {
      return pr.id === id;
    });
    if (productClone[index].quantity > minValue) {
      productClone[index].quantity--;
      this.setState({ products: productClone });
    }
  };

  handleDelete = (id) => {
    let productClone = [...this.state.products];
    let index = productClone.findIndex((pr) => {
      return pr.id === id;
    });

    if (window.confirm("Are You sure to delete?")) {
      productClone.splice(index, 1);
      this.setState({ products: productClone });
    }
  };
}
