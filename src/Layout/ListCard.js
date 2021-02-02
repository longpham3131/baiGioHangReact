import React, { Component } from "react";
import Card from "./Card";

export default class ListCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Card></Card>
        </div>
        <div className="col-sm-4">
          <Card></Card>
        </div>
        <div className="col-sm-4">
          <Card></Card>
        </div>
      </div>
    );
  }
}
