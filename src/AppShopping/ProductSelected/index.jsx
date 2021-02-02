import React, { Component } from "react";

export default class ProductSelected extends Component {
  render() {
    const { mobileSelected } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={mobileSelected.url} alt />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{mobileSelected.display}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{mobileSelected.os}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{mobileSelected.secondaryCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{mobileSelected.primaryCamera}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{mobileSelected.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{mobileSelected.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
