import React, { Component } from "react";
import Modal from "./Modal/indedx";
import ProductList from "./ProductList";
import ProductSelected from "./ProductSelected";

export default class AppShopping extends Component {
  mobileList = [
    {
      id: 1,
      name: "VinSmart Live",
      url: "./img/vsphone.jpg",
      display: 'AMOLED, 6.2", Full HD+',
      os: "Android 9.0 (Pie)",
      primaryCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      secondaryCamera: "20 MP",
      ram: "4 GB",
      rom: "6 GB",
      unitPrice: 5700000,
      quantity: 1,
      totalPrice: 5700000,
    },
    {
      id: 2,
      name: "Meizu 16Xs",
      url: "./img/meizuphone.jpg",
      display: "AMOLED, FHD+ 2232 x 1080 pixels",
      os: "Android 9.0 (Pie)",
      primaryCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      secondaryCamera: "20 MP",
      ram: "4 GB",
      rom: "6 GB",
      unitPrice: 7600000,
      quantity: 1,
      totalPrice: 7600000,
    },
    {
      id: 3,
      name: "Iphone XS Max",
      url: "./img/applephone.jpg",
      display: 'OLED, 6.5", 1242 x 2688 Pixels',
      os: "Android 9.0 (Pie)",
      primaryCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      secondaryCamera: "20 MP",
      ram: "4 GB",
      rom: "6 GB",
      unitPrice: 27000000,
      quantity: 1,
      totalPrice: 27000000,
    },
  ];
  state = {
    mobileSelected: {
      id: 1,
      name: "VinSmart Live",
      url: "./img/vsphone.jpg",
      display: 'AMOLED, 6.2", Full HD+',
      os: "Android 9.0 (Pie)",
      primaryCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      secondaryCamera: "20 MP",
      ram: "4 GB",
      rom: "6 GB",
      unitPrice: 5700000,
      quantity: 1,
    },
    cartList: [],
  };
  // Kiểm tra tồn tại trong giỏ hàng
  isExist = (mobileId) =>
    this.state.cartList.findIndex((Mobile) => Mobile.id === mobileId);
  // Xem thông tin chi tiết giỏ hàng
  handleSelected = (mobileSelected) => {
    this.setState({ mobileSelected });
  };
  // Thêm vào giỏ hàng
  handleAddToCart = (mobileSelected) => {
    let position = this.isExist(mobileSelected.id);
    if (position == -1) {
      this.state.cartList.push(mobileSelected);
      this.setState({ cartList: this.state.cartList });
    } else {
      this.state.cartList[position].quantity += 1;
      this.calTotalPrice(position);
      this.setState({ cartList: this.state.cartList });
    }
  };
  // Thêm số lượng sản phẩm
  handePlusQuantity = (mobileId) => {
    let index = this.isExist(mobileId);
    this.state.cartList[index].quantity += 1;
    this.calTotalPrice(index);
    this.setState({ cartList: this.state.cartList });
  };
  handeMinusQuantity = (mobileId) => {
    let index = this.isExist(mobileId);
    if (this.state.cartList[index].quantity > 1) {
      this.state.cartList[index].quantity -= 1;
      this.calTotalPrice(index);
      this.setState({ cartList: this.state.cartList });
    }
  };
  // Xóa sản phẩm khỏi giỏ hàng
  handleDelete = (mobileId) => {
    let index = this.isExist(mobileId);
    this.state.cartList.splice(index, 1);
    this.setState({ cartList: this.state.cartList });
  };
  // Tính tổng tiền 1 sản phẩm
  calTotalPrice = (index) => {
    this.state.cartList[index].totalPrice =
      this.state.cartList[index].unitPrice *
      this.state.cartList[index].quantity;
  };
  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (
            {this.state.cartList.reduce((quantity, mobile, index) => {
              return (quantity += mobile.quantity);
            }, 0)}
            )
          </button>
        </div>
        <ProductList
          mobileList={this.mobileList}
          handleSelected={this.handleSelected}
          handleAddToCart={this.handleAddToCart}
        ></ProductList>
        <Modal
          cartList={this.state.cartList}
          handleDelete={this.handleDelete}
          handleMinusQuantity={this.handeMinusQuantity}
          handlePlusQuantity={this.handePlusQuantity}
        ></Modal>
        <ProductSelected
          mobileSelected={this.state.mobileSelected}
        ></ProductSelected>
      </section>
    );
  }
}
