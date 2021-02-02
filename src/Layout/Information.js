import React, { Component } from "react";
import Contact from "./Contact";
import Intro from "./Intro";

export default class Information extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <Intro></Intro>
        </div>
        <div className="col-sm-4">
          <Contact></Contact>
        </div>
      </div>
    );
  }
}
