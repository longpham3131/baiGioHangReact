import React, { Component } from "react";
import Information from "./Information";
import ListCard from "./ListCard";

export default class Content extends Component {
  render() {
    return (
      <div className="container">
        <Information></Information>
        <ListCard></ListCard>
      </div>
    );
  }
}
