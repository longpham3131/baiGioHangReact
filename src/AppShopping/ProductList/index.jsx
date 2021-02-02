import React, { Component } from "react";
import Product from "../Product";

export default class ProductList extends Component {
  renderProduct = () => {
    const { mobileList, handleSelected, handleAddToCart } = this.props;
    return mobileList.map((mobile) => {
      return (
        <div className="col-sm-4">
          <Product
            mobile={mobile}
            handleSelected={handleSelected}
            handleAddToCart={handleAddToCart}
          ></Product>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
