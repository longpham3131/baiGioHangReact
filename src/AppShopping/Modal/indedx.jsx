import React, { Component } from "react";

export default class Modal extends Component {
  handleDel = (cartId) => {
    const { handleDelete } = this.props;
    handleDelete(cartId);
  };
  handlePlus = (cartID) => {
    const { handlePlusQuantity } = this.props;
    handlePlusQuantity(cartID);
  };
  handleMinus = (cartID) => {
    const { handleMinusQuantity } = this.props;
    handleMinusQuantity(cartID);
  };
  renderCartList = () => {
    const { cartList } = this.props;
    console.log(cartList);
    return cartList.map((cart) => {
      return (
        <tr className="cart-item">
          <td>{cart.id}</td>
          <td>{cart.name}</td>
          <td>
            {" "}
            <img src={cart.url} width="50"></img>{" "}
          </td>
          <td>
            <button
              onClick={() => {
                this.handleMinus(cart.id);
              }}
              className="btn"
            >
              -
            </button>
            {cart.quantity}
            <button
              onClick={() => {
                this.handlePlus(cart.id);
              }}
              className="btn"
            >
              +
            </button>
          </td>
          <td>{cart.unitPrice}</td>
          <td>{cart.totalPrice}</td>
          <td>
            {" "}
            <button
              onClick={() => {
                this.handleDel(cart.id);
              }}
              class="btn btn-danger"
            >
              Delete
            </button>{" "}
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody> {this.renderCartList()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
