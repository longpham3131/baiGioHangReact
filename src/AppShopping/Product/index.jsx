import React, { Component } from "react";

export default class Product extends Component {
  handleMobile = () => {
    const { mobile, handleSelected } = this.props;
    handleSelected(mobile);
  };
  handleAdd = () => {
    const { mobile, handleAddToCart } = this.props;
    handleAddToCart(mobile);
  };

  render() {
    const { mobile } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={mobile.url} alt />
        <div className="card-body">
          <h4 className="card-title">{mobile.name}</h4>
          <button className="btn btn-success" onClick={this.handleMobile}>
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={this.handleAdd}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
