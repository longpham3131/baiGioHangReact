import React, { Component } from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Carousel></Carousel>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}
